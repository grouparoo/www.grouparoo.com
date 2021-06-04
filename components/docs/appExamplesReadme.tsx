import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
const readmeUrl =
  "https://raw.githubusercontent.com/grouparoo/app-examples/main/README.md";

export default function AppExamplesReadme() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await fetch(readmeUrl);
    const _content = await response.text();
    setContent(_content);
    setLoading(false);
  }

  if (loading) return <Spinner animation={"grow"} />;

  return <ReactMarkdown>{content}</ReactMarkdown>;
}
