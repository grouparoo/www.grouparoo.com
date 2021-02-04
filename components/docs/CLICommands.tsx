import CLICommandData from "../../data/cli-commands.json";

export default function CLICommand({ name }) {
  const data = CLICommandData.find((c) => {
    const chunk = c.name.split(" ")[0];
    return chunk === name;
  });

  return (
    <>
      <a id={`${name}`}>
        <h3>
          <code>grouparoo {name}</code>
        </h3>
      </a>
      <pre>
        <code>
          <strong>$ grouparoo {data.name}</strong>
          <br />
          <br />
          {data.description}
          <br />
          <br />
          Options:
          {Object.keys(data.inputs).length > 0 ? (
            <>
              {Object.keys(data.inputs).map((k) => {
                const input = data.inputs[k];
                return (
                  <>
                    <br /> {input.letter ? `-${input.letter}, ` : null}--{k}{" "}
                    {input.description}
                  </>
                );
              })}
            </>
          ) : null}
          <br /> -h, --help display help for command
          {data.example ? (
            <>
              <br />
              <br />
              Example:
              <br /> {data.example}
            </>
          ) : null}
        </code>
      </pre>
    </>
  );
}
