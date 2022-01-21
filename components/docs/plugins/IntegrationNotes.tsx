import { Button } from "react-bootstrap";

export default function PluginDocsIntegrationNotes({ plugin }: { plugin: string }) {
  return (
    <>
      <h2>Notes</h2>

      <p>
      We strive to keep our documentation accurate, easy to use, and up to date. If you notice that something has changed or is not addressed in the process of setting up your Grouparoo connection with {" "} <code>{plugin}</code>, please let us know by reaching out to <a href = "mailto: help@grouparoo.com">help@grouparoo.com</a>.
      </p>
    <p>
      As always, if you need support using Grouparoo, reach out to community members in our Slack channel. We are always happy to help!

      </p>

      <Button href="https://www.grouparoo.com/chat" variant="outline-primary">
        Join us on Slack
      </Button>
    </>
  );
}