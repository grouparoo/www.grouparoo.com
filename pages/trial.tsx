import { Container, Button, Row, Col, Form, Image } from "react-bootstrap";
import Head from "next/head";
import { useForm } from "react-hook-form";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useApi } from "./../hooks/useApi";
import { ErrorHandler } from "../utils/errorHandler";
import extractDomain from "extract-domain";

interface FormError {
  email: string;
  generic: string;
  subdomain: string;
}

export default function Trial({ props }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [editSubdomain, setEditSubdomain] = useState(false);
  const [subdomain, setSubdomain] = useState("");
  const [error, setError] = useState<FormError>({
    email: null,
    generic: null,
    subdomain: null,
  });
  const urlPattern =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

  const onSubdomainChange = (e) => {
    e.preventDefault();
    let extractedDomain: string = "";
    if (e.target.name === "companyName") {
      extractedDomain = extractDomain(encodeURIComponent(e.target.value));
      if (extractedDomain.includes(".")) {
        let toTrim = extractedDomain.indexOf(".");
        extractedDomain = extractedDomain.substring(0, toTrim);
      }
    } else {
      extractedDomain = e.target.value;
    }
    setSubdomain(extractedDomain);
  };

  const onEditSubdomainClick = (e) => {
    setEditSubdomain(!editSubdomain);
  };

  const errorHandler = new ErrorHandler();

  errorHandler.subscribe("result", (e) => {
    const error: FormError = { email: null, generic: null, subdomain: null };
    const message = e?.error?.message || e?.message || e.toString();
    console.log("error", message);
    if (message.match(/email/i)) {
      error.email = "Invalid email address.";
    } else if (message.includes("subdomain")) {
      error.subdomain = message;
    } else {
      error.generic = message;
    }
    setError(error);
  });

  const { execApi } = useApi(errorHandler);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(errors);
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
    data.requestDetails = subdomain;

    // TO DO: CONFIGURE GOOGLE ANALYTICS CONVERSION DATA
    // if (isBrowser() && globalThis?.gtag) {
    //   globalThis.gtag("event", "conversion", {
    //     send_to: "AW-467110449/NGnKCL62zY8CELGU3t4B", // demoRequest conversion
    //     event_callback: () => {},
    //   });
    // }

    const response = await execApi("post", `/api/v1/demo-request`, data);
    if (response?.demoRequest) console.log(data);
    if (response?.demoRequest) {
      setRegistered(true);
    }
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
      I agree to the{" "}
      <Link href="http://www.grouparoo.com/legal/privacy" passHref>
        <a target="_blank" rel="noopener noreferrer">
          privacy policy
        </a>
      </Link>
    </>
  );
  const disabled = loading || registered;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href="https://www.grouparoo.com/trial" />
      </Head>

      <Container
        fluid
        className="align-items-center justify-content-center d-flex my-5 my-lg-0 pb-lg-3 pb-xl-0 mx-0 trialContainer"
      >
        <Row className="align-self-center m-0 ">
          <Col
            md={9}
            xl={5}
            className="align-self-center pb-2 pb-lg-5 text-center mx-auto"
          >
            <Link href="/">
              <Image
                src="/images/logo-and-wordmark-black-words.png"
                alt="Grouparoo Logo"
                width={150}
                height={32}
                className="mb-3"
              />
            </Link>
            <h1>Grouparoo Cloud</h1>
            <h2>Start Your Free 30 Day Trial</h2>
            <p>No credit card required.</p>
          </Col>
          <Col
            xs={12}
            md={9}
            xl={7}
            className="d-flex justify-content-around mx-auto m-0 "
          >
            <Error message={error.generic} />
            {!registered ? (
              <Container className="bg-white border shadow border-3 rounded col-11 p-4 mt-4 mt-md-0">
                <h3 className="mx-auto text-center">
                  Create Your Grouparoo Subdomain
                </h3>

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
                    {errors.email && (
                      <small style={{ color: "red" }}>
                        A valid email is required.
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Company Website *</Form.Label>
                    <Form.Control
                      {...register("companyName", {
                        required: true,
                        pattern: urlPattern,
                      })}
                      type="text"
                      name="companyName"
                      defaultValue=""
                      onChange={onSubdomainChange}
                      disabled={disabled}
                    />
                  </Form.Group>
                  {errors.companyName && (
                    <small style={{ color: "red" }}>
                      A valid url is required.
                    </small>
                  )}
                  <Form.Group>
                    <div className="my-3 text-center">
                      <span>Your Grouparoo subdomain will be: </span>
                      {editSubdomain ? (
                        <>
                          <div className="text-break my-1 h5">
                            <Form.Control
                              {...register("requestDetails", {
                                required: true,
                              })}
                              type="text"
                              name="requestDetails"
                              onChange={onSubdomainChange}
                              defaultValue={subdomain}
                            />
                            <span>.grouparoo.app</span>
                          </div>
                        </>
                      ) : (
                        <div className="text-break my-1 h5">
                          {" "}
                          <span>
                            {subdomain}
                            <span className="text-nowrap">.grouparoo.app</span>
                          </span>
                        </div>
                      )}
                      <Error message={error.subdomain} />

                      {errors.requestDetails && (
                        <small style={{ color: "red" }}>
                          A valid subdomain is required.
                        </small>
                      )}

                      <Button variant="link" onClick={onEditSubdomainClick}>
                        {editSubdomain ? "save" : "change"}
                      </Button>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <div className="my-3">
                      <Form.Check
                        {...register("check", { required: true })}
                        type="checkbox"
                        id="privacy-policy-check"
                        defaultValue="false"
                        label={privacyPolicyLabel}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-lg"
                      disabled={disabled}
                    >
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              </Container>
            ) : (
              <>
                <Container className="bg-white border shadow border-3 rounded col-11 p-4 mt-4 mt-md-0">
                  <Row className="text-center mb-1">
                    <Col>
                      <h1>Grouparoo Cloud</h1>
                      <h2>We'll be in touch!</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      You will receive an email with your login credentials and
                      instructions on how to get started shortly. Meanwhile you
                      can check out:
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
                </Container>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
