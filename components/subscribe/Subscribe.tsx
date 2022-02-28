import { useCallback, useMemo, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useApi } from "../../hooks/useApi";
import { ErrorHandler } from "../../utils/errorHandler";
import { isBrowser } from "../../utils/isBrowser";
import styles from "./Subscribe.module.scss";

export const Subscribe = ({
  campaign,
  small,
}: {
  campaign: string;
  small?: boolean;
}) => {
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);
  const GoogleAdsSubscribeID = process.env.GOOGLE_ADS_SUBSCRIBE_CONVERSION;

  const errorHandler = new ErrorHandler();
  errorHandler.subscribe("result", (e) => {
    let message = e?.message || e.toString();
    if (message.match(/email/i)) {
      message = "Invalid email address.";
    }
    console.log("error", message);
    setError(message);
  });

  const { execApi } = useApi(errorHandler);

  const onSubmit = useCallback(
    async (data) => {
      setLoading(true);

      data.source = window?.location?.hostname || "grouparoo website";
      data.medium = "web";
      data.campaign = campaign;

      if (isBrowser() && globalThis?.gtag) {
        globalThis.gtag("event", "conversion", {
          send_to: GoogleAdsSubscribeID,
          event_callback: () => {},
        });
      }

      const response = await execApi("post", `/api/v1/subscribers`, data);
      if (response?.subscriber) setSubscribed(true); // TODO: should we set a cookie to hide this later?

      setLoading(false);
    },
    [GoogleAdsSubscribeID, campaign, execApi]
  );

  const [emailRowSize, buttonRowSize] = useMemo(
    () =>
      small
        ? [{ xs: 12 }, { xs: 12 }]
        : [
            { md: 8, sm: 12, xs: 12 },
            { md: 4, sm: 12, xs: 12 },
          ],
    [small]
  );

  const form = useMemo(
    () =>
      subscribed ? null : (
        <Form id="form" onSubmit={handleSubmit(onSubmit)}>
          <Row className="pb-2">
            <Col {...emailRowSize}>
              <Form.Group>
                <Form.Control
                  {...register("email", { required: true })}
                  type="email"
                  placeholder={small ? "Email" : "Enter email address"}
                  name="email"
                  defaultValue=""
                  disabled={loading}
                />
                <div style={{ fontSize: "smaller", color: "red" }}>{error}</div>
              </Form.Group>
            </Col>
            <Col {...buttonRowSize}>
              <Button
                type="submit"
                variant="secondary"
                className={`rounded-pill ${styles.subscribe} ${
                  small ? styles.small : ""
                }`}
              >
                Subscribe
              </Button>
            </Col>
          </Row>
        </Form>
      ),
    [
      buttonRowSize,
      emailRowSize,
      error,
      handleSubmit,
      loading,
      onSubmit,
      register,
      small,
      subscribed,
    ]
  );
  const content = useMemo(
    () =>
      subscribed
        ? "You have been subscribed. Talk to you soon!"
        : "We will let you know about product updates and new content.",
    [subscribed]
  );

  return (
    <Row>
      <Col>
        <h3>Stay up to date</h3>
        <p>{content}</p>
        {form}
      </Col>
    </Row>
  );
};
