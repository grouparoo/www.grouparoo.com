import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useApi } from "./../hooks/useApi";
import { useForm } from "react-hook-form";
import { Container, Alert, Row, Col, Form, Button } from "react-bootstrap";
import Image from "../components/Image";
import { ErrorHandler } from "../utils/errorHandler";
import { isBrowser } from "../utils/isBrowser";
import { EmailValidators } from "../utils/validators";

interface FormError {
  email: string;
  generic: string;
}
export default function Meet() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [requested, setRequested] = useState(false);
  const [error, setError] = useState<FormError>({ email: null, generic: null });

  const errorHandler = new ErrorHandler();

  errorHandler.subscribe("result", (e) => {
    const error: FormError = { email: null, generic: null };
    const message = e?.error?.message || e?.message || e.toString();
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

    if (isBrowser() && globalThis?.gtag) {
      globalThis.gtag("event", "conversion", {
        send_to: "AW-467110449/NGnKCL62zY8CELGU3t4B", // demoRequest conversion
        event_callback: () => {},
      });
      globalThis.gtag("event", "demo-request", {
        event_category: "conversion",
      });
    }

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
            <h1 className="mb-4">Make your customer data actionable</h1>
            <h2 className="h5">Sync customer data to your business tools</h2>
            <p>
              Use Grouparoo to quickly and easily sync customer data to all of
              your business tools
            </p>
            <h2 className="h5">Use Source-of-truth data</h2>
            <p>
              Pull data from trusted sources like data warehouses instead of
              instrumenting buggy Event streams.
            </p>

            <Container className="mt-4">
              <Row>
                <p className="small">Trusted by data-driven teams</p>
              </Row>
              <Row>
                <Col>
                  <Image
                    src="/images/home/customer-logos/chipax-logo@2x.png"
                    width="210"
                    height="67"
                    alt="Chipax logo"
                  />
                </Col>
                <Col>
                  <Image
                    src="/images/home/customer-logos/Sendoso-Logo-1.svg"
                    width="210"
                    height="47"
                    alt="Sendoso logo"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={6}>
            <Error message={error.generic} />
            <Container className="bg-light p-4 mt-4 mt-md-0">
              <h3 className="mx-auto text-center">Schedule a 30 minute demo</h3>
              <Form id="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                {!requested ? (
                  <>
                    {" "}
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        {...register("firstName")}
                        type="text"
                        name="firstName"
                        defaultValue=""
                        disabled={disabled}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        {...register("lastName")}
                        type="text"
                        name="lastName"
                        defaultValue=""
                        disabled={disabled}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Work Email *</Form.Label>
                      <Form.Control
                        {...register("email", {
                          required: true,
                          validate: (email) => EmailValidators.validate(email),
                        })}
                        type="email"
                        name="email"
                        defaultValue=""
                        disabled={disabled}
                      />
                      <Error message={error.email} />
                      {errors.email && (
                        <small style={{ color: "red" }}>
                          Please enter a valid work email.
                        </small>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        {...register("companyName")}
                        type="text"
                        name="companyName"
                        defaultValue=""
                        disabled={disabled}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        What tools/products are you hoping to connect with
                        Grouparoo? (e. g. MySQL, Snowflake, Salesforce, Hubspot)
                      </Form.Label>
                      <Form.Control
                        {...register("requestDetails")}
                        as="textarea"
                        name="requestDetails"
                        defaultValue=""
                        disabled={disabled}
                        rows={3}
                      />
                    </Form.Group>
                  </>
                ) : null}

                <Form.Group className="text-center">
                  {requested ? (
                    <Alert variant="success">Talk to you soon!</Alert>
                  ) : (
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-lg"
                      disabled={disabled}
                    >
                      Submit
                    </Button>
                  )}
                </Form.Group>
              </Form>
            </Container>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <p>
              For all other inquiries, please email{" "}
              <a href="mailto:help@grouparoo.com">help@grouparoo.com</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
