const PluginDocsLinks = ({ plugin }: { plugin: string }) => {
  if (!plugin) return null;

  const name = `@grouparoo/${plugin.toLowerCase()}`;
  const npmUrl = `https://www.npmjs.com/package/${name}`;
  const githubUrl = `https://github.com/grouparoo/grouparoo/tree/main/plugins/${name}`;

  return (
    <div className="mb-4">
      <p className="mb-1">
        <strong>NPM:</strong>{" "}
        <a href={npmUrl} target="_blank" rel="noreferrer">
          {name}
        </a>
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a href={githubUrl} target="_blank" rel="noreferrer">
          {name}
        </a>
      </p>
    </div>
  );
};

export default PluginDocsLinks;
