import { Fragment } from "react";
import {
  Alert,
  Accordion,
  Button,
  Tabs,
  Tab,
  Table,
  Row,
  Col,
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
  example: {
    propertyId: string;
    operation: {
      op: string;
    };
    match?: string;
    relativeMatch?: string;
    relativeMatchUnit?: string;
  };
  caption: string;
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
                  ("2020-09-01T08:15:00+00:00"){" "}
                </span>
                A date passed as YYYY-MM-DD will pass validation, but may result
                in less accurate group results.
              </Alert>
            ) : null}
            The following operators are available on <code>{heading}</code>{" "}
            properties:
          </p>

          {data.map((item, idx) => (
            <Row
              key={idx}
              className="border border-top-light border-bottom-light pt-3 pb-2  align-items-center pl-lg-5 pr-lg-3"
            >
              <Col className="text-center col-lg-4 mx-auto mx-0 pl-4 pl-lg-0">
                <Row>
                  <code className="h5">{item.op}</code>
                </Row>
                <Row>{item.description}</Row>
              </Col>
              <Col className="col-12 col-lg-8 mx-auto">
                <div className="overflow-hidden">
                  <CodeBlock
                    value={JSON.stringify(item.example, null, 2)}
                    language="json"
                  />
                </div>
                <div className="pl-2">
                  <small>{item.caption}</small>
                </div>
              </Col>
            </Row>
          ))}
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
