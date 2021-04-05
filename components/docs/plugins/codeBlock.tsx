import Highlight, { defaultProps } from "prism-react-renderer";

export interface CodeBlockProps {
  code: string;
  language?: "cli" | "json" | "js";
}

const CommandLineBlock = ({ code }) => {
  return (
    <pre>
      <code>
        {code
          .trim()
          .split("\n")
          .map((line, idx) => (
            <span key={idx}>
              {idx !== 0 ? <br /> : null}
              <span>$ {line.trim()}</span>
            </span>
          ))}
      </code>
    </pre>
  );
};

const PluginDocsCodeBlock = ({ code, language }: CodeBlockProps) => {
  if (language === "cli") return <CommandLineBlock code={code} />;

  return (
    <Highlight Prism={defaultProps.Prism} code={code} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className={`language-${language}`}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default PluginDocsCodeBlock;
