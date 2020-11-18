import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "../components/Image";

export default function Support() {
  const supportButtonStyle = { marginTop: 10, marginBottom: 40 };

  return (
    <>
      <Head>
        <title>Grouparoo: Support</title>
        <meta
          name="description"
          content="Learn more about how to get support for Grouparoo."
        />
        <link rel="canonical" href="https://www.grouparoo.com/support" />
      </Head>

      <Container>
        <Row>
          <Col>
            <h1>Getting Support for Grouparoo</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Image
              thumbnail
              src="/images/support/support.jpg"
              alt="Computers and people"
              width={1100}
              height={517}
            />

            <p>
              Grouparoo is an open-source project, and we may have a different
              model of support than you are used to if you are coming from a
              conventional SaaS marketing tool.
            </p>
            <p>
              <strong>
                We strive to respond to bugs, questions, and problems
                transparently in the open.
              </strong>{" "}
              We believe this goal is important such that future Grouparoo users
              can find past questions and answers to help themselves, leading to
              a stronger and more informed community.
            </p>
            <h2>Github Issues</h2>
            <p>
              If you are a user of the open source Grouparoo project, please
              open a new{" "}
              <a
                target="_blank"
                href="https://github.com/grouparoo/grouparoo/issues/new/choose"
                rel="nofollow noopener noreferrer"
              >
                Github Issue
              </a>{" "}
              describing the problem. Issues are public, so please only share
              information that you would be comfortable with other people
              reading. Never share passwords or identifying customer data.
              Choose "Bug Report", and you will be guided though the process.
              There is no SLA provided by Grouparoo, Inc. for resolving Github
              issues. However, any member of the Grouparoo Community, including
              other users, are able to see your issue and help you out.
            </p>

            <Button
              variant="outline-primary"
              style={supportButtonStyle}
              href="https://github.com/grouparoo/grouparoo/issues/new/choose"
              target="blank"
            >
              Create a new support issue
            </Button>
            <h2>Paid Support</h2>
            <p>
              If you hold a paid Grouparoo subscription, please create a{" "}
              <a
                href="https://github.com/grouparoo/grouparoo/issues/new/choose"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Github Issue
              </a>{" "}
              to start the support process. We monitor Github Issues from your
              team/company, and will prioritize them according to our agreed
              upon SLA. We still would like to use your issues to build our
              community knowledge base. In the rare case that your issue
              pertains to a proprietary extension or non-public information,
              please email{" "}
              <a href="mailto:help@grouparoo.com">help@grouparoo.com</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
