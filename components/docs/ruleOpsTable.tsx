import { Fragment } from "react";
import { Accordion, Button, Tabs, Tab, Table } from "react-bootstrap";
import pgRuleOps from "../../data/property-ops-dictionary--postgres.json";
import sqliteRuleOps from "../../data/property-ops-dictionary--sqlite.json";

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
  boolean: any;
  date: any;
  email: any;
  float: any;
  integer: any;
  phoneNumber: any;
  string: any;
  url: any;
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
            The following operators are available on <code>{heading}</code>{" "}
            properties:
          </p>
          <Table>
            <thead>
              <tr>
                <th>Operator</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <code>{item.op}</code>
                  </td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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
