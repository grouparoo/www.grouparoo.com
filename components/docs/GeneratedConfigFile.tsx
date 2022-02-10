import { Button } from "react-bootstrap";

export default function GeneratedConfigFile({ type }) {
  return (
    <>
      <h2>Generated Config File</h2>

      <p>
        Grouparoo's UI Config will write a JSON file to your local filesystem
        based on your inputs. That file will be placed in the{" "}
        <code>config/{type}</code> directory in your Grouparoo project. You can
        further edit this file locally or through the UI Config.
      </p>

      <Button
        href={`/docs/support/config-files/#${type}`}
        variant="outline-primary"
      >
        Learn more about config files
      </Button>
    </>
  );
}
