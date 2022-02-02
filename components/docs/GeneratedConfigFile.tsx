// import { Button } from "react-bootstrap";
// TODO: Re-enable learn more about config files to new config files section

export default function GeneratedConfigFile({ configDir, docPath }) {
  return (
    <>
      <h2>Generated Config File</h2>

      <p>
        Grouparoo's UI Config will write a file to your local filesystem based
        on your inputs. That file will be placed in the{" "}
        <code>config/{configDir}</code> directory in your Grouparoo project. You
        can further edit this file locally or through the UI Config.
      </p>

      {/* <Button href={docPath} variant="outline-primary">
        Learn more about config files
      </Button> */}
    </>
  );
}
