import { PluginConfigOption } from "../../../data/plugins";

import Markdown from "./markdown";

const PluginDocsOption = (option: PluginConfigOption) => {
  return (
    <span>
      <dt>
        <code>{option.name}</code>
        {option.required && (
          <span>
            {" "}
            <strong>[required]</strong>
          </span>
        )}
        {option.default && (
          <span className="font-weight-light">
            {" "}
            (default: <code>{option.default}</code>)
          </span>
        )}
      </dt>
      <dd>
        <Markdown>{option.description}</Markdown>
      </dd>
      {option.options && (
        <dd>
          <strong>Options:</strong> {option.options.join(', ')}
        </dd>
      )}
    </span>
  );
};

const PluginDocsOptions = ({ options }) => {
  if (!options) return null;

  return (
    <dl style={{ paddingLeft: "1rem" }}>
      {Object.entries(options).map(([name, option], idx) => (
        <PluginDocsOption key={idx} name={name} {...option} />
      ))}
    </dl>
  );
};

export default PluginDocsOptions;
