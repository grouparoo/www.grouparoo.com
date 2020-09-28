import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Accordion, Alert } from "react-bootstrap";
const JOBS_URL = "https://api.lever.co/v0/postings/grouparoo?mode=json";

export interface LeverJob {
  id: string;
  text: string;
  hostedUrl: string;
  applyUrl: string;
  additionalPlain: string;
  additional: string;
  categories: { commitment: string; location: string; team: string };
  createdAt: number;
  descriptionPlain: string;
  description: string;
  lists: LeverJobListItem[];
}

export interface LeverJobListItem {
  text: string;
  content: string;
}

export default function JobBoard() {
  const [jobs, setJobs] = useState<LeverJob[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    setLoading(true);
    const jobs = await fetch(JOBS_URL).then((response) => response.json());
    setLoading(false);
    setJobs(jobs);
  }

  if (loading) {
    return <Alert variant="primary">Loading open positions...</Alert>;
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
            <JobCard job={job} />
          </Col>{" "}
        </Row>
      ))}
    </>
  );
}

function JobCard({ job }: { job: LeverJob }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{job.text}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: job.description }} />

        {job.lists.map((listItem) => (
          <JobListItem
            key={`job-${job.id}-list-${listItem.text}`}
            listItem={listItem}
          />
        ))}

        <br />

        <Button variant="primary" href={job.applyUrl} target="_blank">
          Apply Now - {job.text}
        </Button>
      </Card.Body>
    </Card>
  );
}

function JobListItem({ listItem }: { listItem: LeverJobListItem }) {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <strong>{listItem.text}</strong>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body dangerouslySetInnerHTML={{ __html: listItem.content }} />
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
