import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useApi } from "./../hooks/useApi";
import { useForm } from "react-hook-form";
import { Container, Alert, Row, Col, Form, Button } from "react-bootstrap";
import { ErrorHandler } from "../utils/errorHandler";

interface FormError {
  email: string;
  generic: string;
}
export default function Meet() {
  const { handleSubmit, register } = useForm();
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [requested, setRequested] = useState(false);
  const [error, setError] = useState<FormError>({ email: null, generic: null });

  const errorHandler = new ErrorHandler();
  errorHandler.subscribe("result", (e) => {
    const error: FormError = { email: null, generic: null };
    const message = e?.error?.message || e?.message || e.toString();
    console.log("error", message);
    if (message.match(/email/i)) {
      error.email = "Invalid email address.";
    } else {
      error.generic = message;
    }
    setError(error);
  });

  useEffect(() => {
    if (query.email) {
      window.document
        .getElementsByName("email")[0]
        .setAttribute("value", query.email.toString());
    }
  }, [query.email]);

  const { execApi } = useApi(errorHandler);

  const onSubmit = async (data) => {
    setLoading(true);

    // defaults
    let source = "/meet";
    let medium = "web";
    let campaign = globalThis?.document?.referrer;

    const storage = globalThis?.sessionStorage;
    if (storage) {
      source = storage.getItem("utm_source")
        ? storage.getItem("utm_source")
        : storage.getItem("prevPath")
        ? storage.getItem("prevPath")
        : source;
      medium = storage.getItem("utm_medium")
        ? storage.getItem("utm_medium")
        : medium;
      campaign = storage.getItem("utm_campaign")
        ? storage.getItem("utm_campaign")
        : campaign;
    }

    data.source = source;
    data.medium = medium;
    data.campaign = campaign;

    const response = await execApi("post", `/api/v1/demo-request`, data);
    if (response?.demoRequest) setRequested(true);
    setLoading(false);
  };

  const Error = function ({ message }) {
    if (!message) {
      return null;
    }
    return <div style={{ fontSize: "smaller", color: "red" }}>{message}</div>;
  };

  const disabled = loading || requested;
  return (
    <>
      <Head>
        <title>Meet Grouparoo</title>
        <meta
          name="description"
          content="Sign up to meet with the Grouparoo team and see a demo of the Grouparoo product"
        />
        <link rel="canonical" href="https://www.grouparoo.com/meet" />
      </Head>

      <Container>
        <Row>
          <Col md={6}>
            <h1>Meet Grouparoo</h1>
            <p>
              See how Grouparoo can help you with your data synchronization
              needs.
            </p>
            <p>We will get back to you soon and schedule a quick call.</p>
          </Col>
          <Col md={6}>
            <Error message={error.generic} />

            <Form id="form" onSubmit={handleSubmit(onSubmit)}>
              {!requested ? (
                <>
                  {" "}
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      defaultValue=""
                      ref={register}
                      disabled={disabled}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      defaultValue=""
                      ref={register}
                      disabled={disabled}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Work Email *</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      defaultValue=""
                      ref={register}
                      disabled={disabled}
                    />
                    <Error message={error.email} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      defaultValue=""
                      ref={register}
                      disabled={disabled}
                    />
                  </Form.Group>
                </>
              ) : null}

              <Form.Group>
                {requested ? (
                  <Alert variant="success">Talk to you soon!</Alert>
                ) : (
                  <Button variant="primary" type="submit" disabled={disabled}>
                    Submit
                  </Button>
                )}
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <p>
              For all other inquires, please email{" "}
              <a href="mailto:help@grouparoo.com">help@grouparoo.com</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
