import Link from "next/link";
import { PluginData } from "../../../data/plugins";

import TableSource from "./TableSource";
import QuerySource from "./QuerySource";
import { Alert } from "../Index";

const PluginDocsColumnarSource = ({ plugin }: { plugin: string }) => {
  const pluginData = PluginData.find(({ name }) => name === plugin);
  const table = pluginData.tableAlternative || "table";
  const column = pluginData.columnAlternative || "column";
  const queryLanguage = pluginData.queryLanguageAlternative || "SQL";

  return (
    <>
      <h2 id={`create-${pluginData.slug}-source`}>Create a {plugin} Source</h2>
      <p>
        The {plugin} Source is a specific type of Source that we call a
        <em> Columnar Source</em>, which means it imports data from a
        column-based mechanism, like a database. Columnar Sources can take one
        of two forms:
      </p>

      <ul>
        <li>
          A Columnar{" "}
          <em>
            <Link href="/docs/getting-started/product-concepts#table-source">
              Table Source
            </Link>
          </em>{" "}
          targets specific {column}s within a single {table} and can perform
          aggregation methods on that {column}.
        </li>
        <li>
          A Columnar{" "}
          <em>
            <Link href="/docs/getting-started/product-concepts#query-source">
              Query Source
            </Link>
          </em>{" "}
          provides the ability to write custom {queryLanguage} code to extract
          data from one or more {table}s and import the result into Grouparoo.
        </li>
      </ul>

      {pluginData.tableAlternative && (
        <Alert variant="primary">
          <p className="mb-0">
            Note that the {plugin} terminology for table is{" "}
            <code>{pluginData.tableAlternative}</code>
            {pluginData.columnAlternative && (
              <span>
                {" "}
                and for column is <code>{pluginData.columnAlternative}</code>
              </span>
            )}
            . However, we'll keep the <em>Columnar</em> and{" "}
            <em>Table Source</em> terms since they're part of Grouparoo
            terminology.
          </p>
        </Alert>
      )}

      <TableSource plugin={plugin} />
      <QuerySource plugin={plugin} />
    </>
  );
};

export default PluginDocsColumnarSource;
