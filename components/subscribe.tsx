import { useState } from "react";
import { useApi } from "./../hooks/useApi";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ErrorHandler } from "../utils/errorHandler";
import { isBrowser } from "../utils/isBrowser";
import posthog from "posthog-js";

export default function Subscribe() {
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);

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
    data.campaign = "blog-subscribe";

    if (isBrowser() && globalThis?.gtag) {
      globalThis.gtag("event", "conversion", {
        send_to: "AW-467110449/kY5uCK_Yg44CELGU3t4B", // subscribe conversion
        event_callback: () => {},
      });
    }

    const response = await execApi("post", `/api/v1/subscribers`, data);
    if (response?.subscriber) {
      posthog.identify(response.subscriber.id, { email: data.email }, data);
      setSubscribed(true); // TODO: should we set a cookie to hide this later?
    }

    setLoading(false);
  };

  const controlProps: any = {};
  if (loading) {
    controlProps.disabled = true;
  }

  let form;
  let content = "We will let you know about our launch and new content.";
  if (subscribed) {
    form = null;
    content = "You have been subscribed. Talk to you soon!";
  } else {
    form = (
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={12} style={{ padding: 0 }}>
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
        <Row>
          <Col style={{ padding: 0 }}>
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }

  const minHeight = 150; // height that prevents it from moving after submit in desktop

  return (
    <Col style={{ marginTop: 20, marginBottom: 10, minHeight }}>
      <Row>
        <h5>Stay up to date</h5>
      </Row>
      <Row>
        <p style={{ fontSize: "smaller" }}>{content}</p>
      </Row>
      {form}
    </Col>
  );
}
