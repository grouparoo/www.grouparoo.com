import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export default function CodeBlock(props: {
  language?: string;
  showLineNumbers?: boolean;
  value?: string;
  children?: any;
}) {
  const language = props?.language?.split(":")[0] || "typescript";
  const showLineNumbers = props.showLineNumbers || false;

  return (
    <SyntaxHighlighter
      language={language}
      style={prism}
      showLineNumbers={showLineNumbers}
    >
      {props.value ? props.value : props.children}
    </SyntaxHighlighter>
  );
}
