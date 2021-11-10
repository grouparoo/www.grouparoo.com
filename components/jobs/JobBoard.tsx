import { Row, Col, Card, Alert, Button } from "react-bootstrap";
import { LeverJob } from "../../utils/jobPosts";

export default function JobBoard({ jobs }: { jobs: LeverJob[] }) {
  if (jobs.length === 0) {
    return (
      <Alert variant="primary">There are no open positions at this time</Alert>
    );
  }

  return (
    <>
      {jobs.map((job) => (
        <Row key={`job-${job.id}`}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {job.text} - <small>Remote, USA</small>
                </Card.Title>
                <Button
                  variant="outline-primary"
                  href={`/jobs/${job.id}`}
                  size="sm"
                >
                  View Position
                </Button>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      ))}
    </>
  );
}
