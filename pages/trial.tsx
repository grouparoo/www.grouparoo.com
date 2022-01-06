import { Container } from "react-bootstrap";
import { TrialForm } from "../components/TrialForm";
import SEO from "../components/SEO";

const title = "Grouparoo: Free Trial";
const description =
  "Get started with Grouparoo, the open source framework that helps you move data between your database and all of your cloud-based tools.";

export default function TrialPage() {
  return (
    <>
      <SEO
        description={description}
        title={title}
        canonical={true}
        path="/trial"
      />
      <Container>
        <TrialForm />
      </Container>
    </>
  );
}
