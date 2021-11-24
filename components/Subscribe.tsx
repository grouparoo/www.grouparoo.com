import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ErrorHandler } from "../utils/errorHandler";
import { isBrowser } from "../utils/isBrowser";

export default function Subscribe({ campaign }: { campaign: string }) {
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);
  const GoogleAdsSubscribeID = process.env.GOOGLE_ADS_SUBSCRIBE_CONVERSION;

  const errorHandler = new ErrorHandler();
  errorHandler.subscribe("result", (e) => {
    let message = e?.error?.message || e?.message || e.toString();
    if (message.match(/email/i)) {
      message = "Invalid email address.";
    }
    console.log("error", message);
    setError(message);
  });

  const { execApi } = useApi(errorHandler);

  const onSubmit = async (data) => {
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
  };

  const controlProps: any = {};
  if (loading) {
    controlProps.disabled = true;
  }

  let form;
  let content = "We will let you know about product updates and new content.";
  if (subscribed) {
    form = null;
    content = "You have been subscribed. Talk to you soon!";
  } else {
    form = (
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Row className="pb-2">
          <Col md={12}>
            <Form.Group>
              <Form.Control
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                name="email"
                defaultValue=""
                {...controlProps}
              />
              <div style={{ fontSize: "smaller", color: "red" }}>{error}</div>
            </Form.Group>
          </Col>
        </Row>
        <Row className="pb-2">
          <Col>
            <Button type="submit" variant="outline-primary">
              Subscribe
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }

  return (
    <Row>
      <Col>
        <h5>Stay up to date</h5>
        <p style={{ fontSize: "smaller" }}>{content}</p>
        {form}
      </Col>
    </Row>
  );
}
