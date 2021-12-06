import { Container, Button, Row, Col, Form, Image } from "react-bootstrap";
import Head from "next/head";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { ErrorHandler } from "../utils/errorHandler";
import { isBrowser } from "../utils/isBrowser";
import validator from "validator";
import { EmailValidators } from "../utils/validators";

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
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [editSubdomain, setEditSubdomain] = useState(false);
  const [subdomain, setSubdomain] = useState("");
  const [error, setError] = useState<FormError>({
    email: null,
    generic: null,
    subdomain: null,
  });
  const GoogleAdsTrialConversion = process.env.GOOGLE_ADS_TRIAL_CONVERSION;

  const onSubdomainChange = (e) => {
    e.preventDefault();

    let extractedDomain: string = e.target.value;

    if (extractedDomain.includes(".")) {
      if (extractedDomain.match(/\./g).length === 1) {
        extractedDomain = extractedDomain.substring(
          0,
          extractedDomain.indexOf(".")
        );
      } else if (extractedDomain.match(/\./g).length === 2) {
        extractedDomain = extractedDomain.substring(
          extractedDomain.indexOf(".") + 1,
          extractedDomain.lastIndexOf(".")
        );
      }
    }
    //anything non-alphanumeric --> '-'
    extractedDomain = extractedDomain.replace(/[^\w-]+/g, "-");

    setSubdomain(extractedDomain);
  };

  const onEditSubdomainClick = (e) => {
    setEditSubdomain(!editSubdomain);
  };

  const errorHandler = new ErrorHandler();

  errorHandler.subscribe("result", (e) => {
    const error: FormError = { email: null, generic: null, subdomain: null };
    const message = e?.error?.message || e?.message || e.toString();

    if (message.includes("subdomain")) {
      error.subdomain = "Subdomain already in use.";
    } else if (message === "email must be unique") {
      error.email = "Email address already in use.";
    } else if (message === "Validation isEmail on email failed") {
      error.email = "Please enter a valid email address.";
    } else {
      error.generic = message;
    }
    setError(error);
  });

  const { execApi } = useApi(errorHandler);

  const onSubmit = async (data) => {
    setLoading(true);
    // defaults
    let source = "/trial_landing";
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

    data.subdomain = subdomain;
    data.source = source;
    data.medium = medium;
    data.campaign = campaign;
    data.email = data.email.toLowerCase();
    data.companyWebsite = data.companyWebsite.toLowerCase();
    data.subdomain = data.subdomain.toLowerCase();

    const response = await execApi("post", `/api/v1/trial-request`, data);
    if (response?.trialRequest) {
      setRegistered(true);

      if (isBrowser() && globalThis?.gtag) {
        globalThis.gtag("event", "conversion", {
          send_to: GoogleAdsTrialConversion,
          event_callback: () => {},
        });
        globalThis.gtag("event", "trial-request", {
          event_category: "conversion",
          event_callback: () => {},
        });
      }
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
      <Link href="/legal/privacy" passHref>
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
        <link rel="canonical" href="https://www.grouparoo.com/trial_landing" />
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <Row className="align-self-center m-0">
          <Col
            md={9}
            xl={5}
            className="align-self-center pb-2 pb-lg-5 text-center mx-auto"
          >
            <Link href="/">
              <a>
                <Image
                  src="/images/logo-and-wordmark-black-words.png"
                  alt="Grouparoo Logo"
                  width={300}
                  height={64}
                  className="mb-3"
                />
              </a>
            </Link>
            <h2>Start Your Free 30 Day Trial</h2>
            <br />
            <br />
            <div className="text-start">
              <h4>Operationalize your customer data</h4>
              <p>Connect your data warehouse to all of your business tools. </p>
              <h4>Reverse ETL for the modern data stack</h4>
              <p>Grouparoo fits into your data engineering workflow</p>
              <h4>New integrations</h4>
              <p>
                Integrations with all your favorite data warehouses and business
                tools
              </p>
            </div>
            <br />
            <Row>
              <Col>
                <Image
                  src="/images/home/integrations/snowflake/snowflake.png"
                  alt="Snowflake logo"
                  width={60}
                  height={60}
                />
              </Col>
              <Col>
                <Image
                  src="/images/home/integrations/redshift/redshift.png"
                  alt="Redshift logo"
                  width={60}
                  height={60}
                />
              </Col>
              <Col>
                <Image
                  src="/images/home/integrations/bigquery/bigquery.png"
                  alt="Bigquery logo"
                  width={60}
                  height={60}
                />
              </Col>
              <Col>
                <Image
                  src="/images/home/integrations/salesforce/salesforce.png"
                  alt="Salesforce logo"
                  width={60}
                  height={60}
                />
              </Col>
              <Col>
                <Image
                  src="/images/home/integrations/marketo/marketo.png"
                  alt="Marketo logo"
                  width={60}
                  height={60}
                />
              </Col>
            </Row>
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
                    <Form.Label>Company Website *</Form.Label>
                    <Form.Control
                      {...register("companyWebsite", {
                        required: true,
                        validate: (input) => validator.isURL(input),
                      })}
                      type="text"
                      name="companyWebsite"
                      defaultValue=""
                      onChange={onSubdomainChange}
                      disabled={disabled}
                    />
                  </Form.Group>
                  {errors.companyWebsite && (
                    <small style={{ color: "red" }}>
                      Please enter a valid company website URL.
                    </small>
                  )}
                  <Form.Group>
                    <div className="my-3 text-center">
                      <span>Your Grouparoo subdomain will be: </span>
                      {editSubdomain ? (
                        <>
                          <h3 className="text-break my-1">
                            <Form.Control
                              {...register("subdomain", {
                                required: true,
                              })}
                              type="text"
                              name="subdomain"
                              onChange={onSubdomainChange}
                              defaultValue={subdomain}
                            />
                            <span>.grouparoo.app</span>
                          </h3>
                        </>
                      ) : (
                        <h3 className="text-break my-1">
                          {" "}
                          <span>
                            {subdomain}
                            <span className="text-nowrap">.grouparoo.app</span>
                          </span>
                        </h3>
                      )}
                      <Error message={error.subdomain} />

                      {errors.subdomain && (
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
                    <div className="my-3 d-flex justify-content-center">
                      <small>
                        <Form.Check
                          {...register("check", { required: true })}
                          type="checkbox"
                          id="privacy-policy-check"
                          defaultValue="false"
                          className="small align-items-center m-0"
                          label={privacyPolicyLabel}
                        />
                      </small>
                      {errors.check && (
                        <small style={{ color: "red" }}>
                          Please review and agree to the privacy policy.
                        </small>
                      )}
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
                      <h2>We&apos;ll be in touch!</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Your request for a trial of Grouparoo Cloud was
                      successful. You will receive an email with your login
                      credentials and instructions on how to get started
                      shortly. Meanwhile you can check out:
                    </Col>
                  </Row>
                  <div className="mt-3 mb-5">
                    <Row className="my-3">
                      <Col>
                        <p className="h4">
                          Check out our Getting Started Guide
                        </p>
                        <Link href="/docs/getting-started" passHref>
                          <a target="_blank" rel="noopener noreferrer">
                            A quick intro to the Grouparoo platform.
                          </a>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <p className="h4">Onboarding Support</p>
                        <Link href="/meet" passHref>
                          <a target="_blank" rel="noopener noreferrer">
                            Schedule Time for an Onboarding Session
                          </a>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <p className="h4">Join the Community</p>
                        <Link href="/docs/community" passHref>
                          <a target="_blank" rel="noopener noreferrer">
                            The Grouparoo community hangs out in Slack.
                          </a>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <p className="h4">Check out our Docs</p>
                        <Link href="/docs" passHref>
                          <a target="_blank" rel="noopener noreferrer">
                            Get tips on how to get the most out of Grouparoo.
                          </a>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </>
            )}
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto text-center pt-3">
            <small>
              For all other inquiries, please email{" "}
              <a href="mailto:help@grouparoo.com">help@grouparoo.com</a>
            </small>
          </Col>
        </Row>
      </Container>
    </>
  );
}
