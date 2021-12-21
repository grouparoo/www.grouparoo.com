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
import CodeBlock from "../Code";

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
    <Accordion.Item eventKey={eventKey} className="">
      <Accordion.Header className="pt-0 pb-0">
        <h4>{heading}</h4>
      </Accordion.Header>
      <Accordion.Body>
        <Fragment>
          <p>
            {heading === "date" ? (
              <Alert variant="primary">
                💡 Dates used for Groups should use full ISO-8601 format: <br />
                <span className="ps-4">
                  <b>YYYY-MM-DDThh:mm:ss.mmm+TZD</b>{" "}
                  ("2020-09-01T08:15:00+00:00"){" "}
                </span>
                A date passed as YYYY-MM-DD will pass validation, but may result
                in less accurate Group results.
              </Alert>
            ) : null}
            The following operators are available on <code>{heading}</code>{" "}
            properties:
          </p>

          {data.map((item, idx) => (
            <>
              <Row
                key={idx}
                className="pt-3 pb-2 align-items-center ps-lg-5 pe-lg-3"
              >
                <Col className="col-lg-4 mx-auto mx-0 ps-4 ps-lg-0">
                  <Row>
                    <code className="h5 p-0">{item.op}</code>
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
                  <div className="ps-2">
                    <small>{item.caption}</small>
                  </div>
                </Col>
              </Row>
              <hr />
            </>
          ))}
        </Fragment>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default function RuleOpsTable() {
  return (
    <Tabs defaultActiveKey={ruleOpsData[0].key}>
      {ruleOpsData.map(({ data, key: dbKey, title }, idx) => (
        <Tab key={dbKey} eventKey={dbKey} title={title}>
          <Accordion
            defaultActiveKey={`${dbKey}-${propertyTypes[0]}`}
            className="m-0"
          >
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
