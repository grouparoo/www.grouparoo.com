import { Container, Button, Row, Col, Form } from "react-bootstrap";
import Head from "next/head";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useApi } from "./../hooks/useApi";
import { ErrorHandler } from "../utils/errorHandler";
import classnames from "classnames";

interface FormError {
  email: string;
  generic: string;
}

export default function Trial({ props }) {
  const { handleSubmit, register } = useForm();
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [editSubdomain, setEditSubdomain] = useState(false);
  const [subdomain, setSubdomain] = useState("");
  const [error, setError] = useState<FormError>({ email: null, generic: null });

  const onSubdomainChange = (e) => {
    e.preventDefault();
    setSubdomain(e.target.value);
  };

  const onEditSubdomainClick = (e) => {
    setEditSubdomain(!editSubdomain);
  };
  // TO DO: This is the same error handling as on /meet.  Neither work.
  // Also, should privacy policy be handled by error handler too? Probably.
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

  const { execApi } = useApi(errorHandler);

  const onSubmit = async (data) => {
    setLoading(true);

    // defaults
    let source = "/trial";
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

    // TO DO: CONFIGURE GOOGLE ANALYTICS CONVERSION DATA
    // if (isBrowser() && globalThis?.gtag) {
    //   globalThis.gtag("event", "conversion", {
    //     send_to: "AW-467110449/NGnKCL62zY8CELGU3t4B", // demoRequest conversion
    //     event_callback: () => {},
    //   });
    // }

    const response = await execApi("post", `/api/v1/demo-request`, data);
    if (response?.demoRequest) console.log(data);
    setRegistered(true);
    setLoading(false);
  };

  const Error = function ({ message }) {
    if (!message) {
      return null;
    }
    return <div style={{ fontSize: "smaller", color: "red" }}>{message}</div>;
  };

  const title = "Grouparoo: Free Trial";
  const description =
    "Get started with Grouparoo, the open source framework that helps you move data between your database and all of your cloud-based tools.";

  const privacyPolicyLabel = (
    <>
      I agree to the <Link href="/legal/privacy">privacy policy</Link>
    </>
  );
  const disabled = loading || registered;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@grouparoo" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Image */}

        <meta
          property="og:image"
          content="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        />
        <meta
          name="twitter:image"
          content="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        />
        <meta name="twitter:image:alt" content={title} />

        {/* Description */}

        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="og:description" content={description} />

        <link rel="canonical" href="https://www.grouparoo.com/" />
      </Head>

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingTop: 0, paddingBottom: 20 }}
      >
        <Container>
          <Row className="pt-5 pb-3">
            <Col>
              <h1>Grouparoo Cloud</h1>
              <h2>Start Your Free 30 Day Trial</h2>
              <p>No credit card required.</p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <Error message={error.generic} />
              <Container className="bg-white border border-3 border-primary p-4 mt-4 mt-md-0">
                <h3 className="mx-auto text-center">
                  Create Your Grouparoo Subdomain
                </h3>

                {!registered ? (
                  <Form id="form" onSubmit={handleSubmit(onSubmit)}>
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
                        {...register("email", { required: true })}
                        type="email"
                        name="email"
                        defaultValue=""
                        disabled={disabled}
                      />
                      <Error message={error.email} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Company Website</Form.Label>
                      <Form.Control
                        {...register("companyName", { required: true })}
                        type="text"
                        name="companyName"
                        defaultValue=""
                        onChange={onSubdomainChange}
                        disabled={disabled}
                      />
                    </Form.Group>
                    <Form.Group>
                      <div className="my-3">
                        <span>Your Grouparoo subdomain will be </span>
                        {editSubdomain ? (
                          <>
                            <Form.Control
                              {...register("requestDetails")}
                              type="text"
                              name="requestDetails"
                              defaultValue={subdomain}
                            />
                            <span>.grouparoo.app</span>
                          </>
                        ) : (
                          <div className="subdomainName">
                            {" "}
                            <Form.Control
                              plaintext
                              readOnly
                              type="text"
                              name="requestDetails"
                              className="d-none"
                              defaultValue={subdomain}
                            />
                            <span>{subdomain}.grouparoo.app</span>
                          </div>
                        )}
                        <Button variant="link" onClick={onEditSubdomainClick}>
                          {editSubdomain ? "save" : "change"}
                        </Button>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="my-3">
                        <Form.Check
                          required
                          type="checkbox"
                          id="privacy-policy-check"
                          label={privacyPolicyLabel}
                        />
                      </div>
                    </Form.Group>
                    <Form.Group className="text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-lg"
                        //   disabled={disabled}
                      >
                        Submit
                      </Button>
                    </Form.Group>
                  </Form>
                ) : (
                  <>
                    <Row>
                      <Col>
                        <h1>Grouparoo Cloud</h1>
                        <h2>We'll be in touch!</h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        You will receive an email with your login credentials
                        and instructions on how to get started shortly.{" "}
                        Meanwhile you can check out:
                      </Col>
                    </Row>
                    <div className="mt-3 mb-5">
                      <Row className="my-3">
                        <Col>
                          <p className="h4">Getting Started Video</p>
                          <a href="https://www.youtube.com/embed/kQ789gMXJB8?rel=0">
                            A quick intro into the Grouparoo platform
                          </a>
                        </Col>
                      </Row>
                      <Row className="my-3">
                        <Col>
                          <p className="h4">Onboarding Support</p>
                          <Link href="/meet">
                            Schedule Time for an Onboarding Session
                          </Link>
                        </Col>
                      </Row>
                      <Row className="my-3">
                        <Col>
                          <p className="h4">Join the Community</p>
                          <Link href="/docs/community">
                            The Grouparoo community hangs out in Slack.
                          </Link>
                        </Col>
                      </Row>
                      <Row className="my-3">
                        <Col>
                          <p className="h4">Check out our Docs</p>
                          <Link href="/docs">
                            Get tips on how to get the most out of Grouparoo.
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </>
                )}
              </Container>
            </Col>{" "}
          </Row>
        </Container>
      </div>
    </>
  );
}
