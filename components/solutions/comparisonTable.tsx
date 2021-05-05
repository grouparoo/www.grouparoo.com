import { Container, Row, Col, Table } from "react-bootstrap";
import Image from "../Image";
import ComparisonRow from "./comparisonRow";

export default function ComparisonTable({ comparisonData }) {
  // comparisonData = [{
  // category: [{
  //   feature: featureName,
  //   grouparoo: true,
  //   comp: false
  // },]
  // }]

  let tableRows = comparisonData.data.map((feature) => (
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
                  <th>{comparisonData.competitor}</th>
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
