import Highlight, { defaultProps, Language } from "prism-react-renderer";

export interface CodeBlockProps {
  code: string;
  language?: Language;
  cli?: boolean;
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

const PluginDocsCodeBlock = ({ cli, code, language }: CodeBlockProps) => {
  if (cli) return <CommandLineBlock code={code} />;

  return (
    <Highlight Prism={defaultProps.Prism} code={code} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className={`language-${language}`}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default PluginDocsCodeBlock;
