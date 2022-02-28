import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";

interface CodeBlockProps {
  code: string;
  theme?: PrismTheme;
  language?: Language;
}

export const CodeBlock = ({
  code,
  theme = vsDark,
  language = "bash",
}: CodeBlockProps) => (
  <Highlight {...defaultProps} language={language} code={code} theme={theme}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
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
