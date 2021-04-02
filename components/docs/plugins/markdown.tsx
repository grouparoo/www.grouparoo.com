import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

const Markdown = ({ children }: { children: string }) => {
  const md = unified().use(parse).use(remark2react).processSync(children)
    .result;

  return <span>{md}</span>;
};

export default Markdown;
