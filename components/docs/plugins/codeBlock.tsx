import Highlight, { defaultProps } from "prism-react-renderer";

export interface CodeBlockProps {
  code: string;
  language?: "cli" | "json";
}

const CommandLineBlock = ({ code }) => {
  return (
    <pre>
      <code>$ {code}</code>
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
