import { useEffect, useState } from "react";
import { Row, Col, Card, Alert, Button } from "react-bootstrap";
import { getJobs, LeverJob } from "../../utils/jobPosts";
import Loader from "../loader";

export default function JobBoard() {
  const [jobs, setJobs] = useState<LeverJob[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const jobs = await getJobs(setLoading);
    setJobs(jobs);
  }

  if (loading) {
    return <Loader />;
  }

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
