import { Fragment } from "react";
import { Row, Col, Container, Card, Alert, Button } from "react-bootstrap";
import { getJob, LeverJob, LeverJobListItem } from "../../utils/jobPosts";
import ApplyAnywayJobCard from "../../components/jobs/applyAnywayJobCard";

export default function JobPage({ pageProps }) {
  const job: LeverJob = pageProps.job;

  if (!job) {
    return (
      <Container>
        <Alert variant="warning">This job cannot be found</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Join Grouparoo</h1>
      <Row>
        <Col md={8}>
          <JobCard job={job} />
        </Col>
        <Col>
          <ApplyAnywayJobCard />
        </Col>
      </Row>
    </Container>
  );
}

function JobCard({ job }: { job: LeverJob }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {job.text} <small> - Remote, USA</small>
        </Card.Title>

        <Button
          size="sm"
          variant="outline-primary"
          href={job.applyUrl}
          target="_blank"
        >
          Apply Now
        </Button>

        <hr />

        <div
          id="job-description"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />

        <br />

        {job.lists.map((listItem) => (
          <Fragment key={`job-${job.id}-list-${listItem.text}`}>
            <JobListItem listItem={listItem} />
            <br />
          </Fragment>
        ))}

        <Button variant="primary" href={job.applyUrl} target="_blank">
          Apply Now - {job.text}
        </Button>
      </Card.Body>
    </Card>
  );
}

function JobListItem({ listItem }: { listItem: LeverJobListItem }) {
  return (
    <Card>
      <Card.Header>
        <strong>{listItem.text}</strong>
      </Card.Header>
      <Card.Body dangerouslySetInnerHTML={{ __html: listItem.content }} />
    </Card>
  );
}

JobPage.getInitialProps = async (ctx) => {
  const job = await getJob(ctx.query.id);
  return { job };
};
