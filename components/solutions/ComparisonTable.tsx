import { Container, Row, Col, Table } from "react-bootstrap";
import Image from "../Image";
import ComparisonRow from "./ComparisonRow";

export default function ComparisonTable({ comparisonChartData }) {
  let tableRows = comparisonChartData.data.map((feature) => (
    <ComparisonRow key={feature.feature} rowData={feature} />
  ));

  return (
    <div id="featureComparisons" className="featureTableSection">
      <Container>
        <Row>
          <Col>
            <Table className="mx-auto col-xs-9" style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th></th>
                  <th>Grouparoo</th>
                  <th>{comparisonChartData.competitor}</th>
                </tr>
              </thead>
              <tbody>{tableRows}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
