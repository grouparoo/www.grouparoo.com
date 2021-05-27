import Link from "next/link";

import TableSource from "./tableSource";
import QuerySource from "./querySource";

const PluginDocsColumnarSource = ({
  plugin,
  isTablesUpperCase = false,
}: {
  plugin: string;
  isTablesUpperCase?: boolean;
}) => {
  const slug = plugin.toLowerCase();

  return (
    <>
      <h2 id={`create-${slug}-source`}>Create a {plugin} Source</h2>
      <p>
        The {plugin} Source is a specific type of Source that we call a
        <em>Columnar Source</em>, which means it imports data from a
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
          targets specific columns within a single table and can perform
          aggregation methods on that column.
        </li>
        <li>
          A Columnar{" "}
          <em>
            <Link href="/docs/getting-started/product-concepts#query-source">
              Query Source
            </Link>
          </em>{" "}
          provides the ability to write custom SQL code to extract data from one
          or more tables and import the result into Grouparoo.
        </li>
      </ul>

      <TableSource plugin={plugin} />
      <QuerySource plugin={plugin} isTablesUpperCase={isTablesUpperCase} />
    </>
  );
};

export default PluginDocsColumnarSource;
