import { Tabs as BootstrapTabs } from "react-bootstrap";

export default function Tabs({ children, ...props }) {
  const newChildren = [...children].map((child, idx) => {
    const props = { ...child.props };

    delete props.mdxType;
    delete props.originalType;

    return { ...child, props };
  });

  return <BootstrapTabs {...props}>{newChildren}</BootstrapTabs>;
}
