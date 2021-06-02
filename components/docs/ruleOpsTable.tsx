import { Fragment } from "react";
import {
  Alert,
  Accordion,
  Button,
  Tabs,
  Tab,
  Table,
  NavItem,
} from "react-bootstrap";
import pgRuleOps from "../../data/property-ops-dictionary--postgres.json";
import sqliteRuleOps from "../../data/property-ops-dictionary--sqlite.json";
import CodeBlock from "../code";

const propertyTypes = [
  "boolean",
  "date",
  "email",
  "float",
  "integer",
  "phoneNumber",
  "string",
  "url",
];

interface PropertyOperations {
  description: string;
  op: string;
}

interface RuleOpsDbTypeData {
  boolean: PropertyOperations[];
  date: PropertyOperations[];
  email: PropertyOperations[];
  float: PropertyOperations[];
  integer: PropertyOperations[];
  phoneNumber: PropertyOperations[];
  string: PropertyOperations[];
  url: PropertyOperations[];
  [key: string]: any;
}

interface RuleOpsDbType {
  key: string;
  title: string;
  data: RuleOpsDbTypeData;
}

const ruleOpsData: RuleOpsDbType[] = [
  {
    key: "pg",
    title: "Postgres",
    data: pgRuleOps,
  },
  {
    key: "sqlite",
    title: "SQLite",
    data: sqliteRuleOps,
  },
];

const DataTable = ({ data, heading, eventKey }) => {
  return (
    <Fragment>
      <Accordion.Toggle
        as={Button}
        variant="link"
        eventKey={eventKey}
        style={{ display: "block", paddingLeft: "0" }}
      >
        <h4>{heading}</h4>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Fragment>
          <p>
            {heading === "date" ? (
              <Alert variant="primary">
                💡 Dates used for calculated groups should use full ISO-8601
                format: <br />
                <span className="pl-4">
                  <b>YYYY-MM-DDThh:mm:ss.mmm+TZD</b>{" "}
                  ("2020-09-01T08:15:00+00:00")
                </span>
                A date passed as YYYY-MM-DD will pass validation, but may result
                in less accurate group results.
              </Alert>
            ) : null}
            The following operators are available on <code>{heading}</code>{" "}
            properties:
          </p>
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th scope="col">Operator</th>
                  <th scope="col">Description</th>
                  <th scope="col" className="d-none d-md-table-cell">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={idx}>
                    <td className="col-6 col-md-3">
                      <code>{item.op}</code>
                    </td>
                    <td className="col-6 col-md-3">{item.description}</td>
                    <td className="col-12 col-md-6">
                      {" "}
                      {item.example ? (
                        <>
                          <div>
                            <CodeBlock value={item.example} />
                            <p className="pl-2">{item.caption}</p>
                          </div>
                        </>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Fragment>
      </Accordion.Collapse>
    </Fragment>
  );
};

export default function RuleOpsTable() {
  return (
    <Tabs defaultActiveKey={ruleOpsData[0].key}>
      {ruleOpsData.map(({ data, key: dbKey, title }, idx) => (
        <Tab
          key={dbKey}
          eventKey={dbKey}
          title={title}
          style={{ padding: "1rem" }}
        >
          <Accordion defaultActiveKey={`${dbKey}-${propertyTypes[0]}`}>
            {propertyTypes.map((typeKey) => (
              <DataTable
                key={typeKey}
                eventKey={`${dbKey}-${typeKey}`}
                heading={typeKey}
                data={data[typeKey]}
              />
            ))}
          </Accordion>
        </Tab>
      ))}
    </Tabs>
  );
}
