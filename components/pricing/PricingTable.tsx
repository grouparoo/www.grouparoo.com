import { Row, Col, Table } from "react-bootstrap";
import Image from "../Image";
import styles from "./PricingTable.module.scss";
export const PricingTable = () => {
  return (
    <Row className="mt-3 mx-auto">
      <Col className="overflow-auto">
        <Table className={`text-center bg-white ${styles.customTable}`}>
          <thead>
            <tr>
              <th scope="col" className="w-50" />
              <th scope="col">Community</th>
              <th scope="col">Standard Cloud</th>
              <th scope="col">Enterprise Cloud</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={12} className="text-start h5">
                FEATURES
              </td>
            </tr>
            <tr>
              <td className="text-start">Real-time data-syncing framework</td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">Integrations available</td>
              <td>All</td>
              <td>All</td>
              <td>All</td>
            </tr>
            <tr>
              <td className="text-start">Dynamic Group Definitions</td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">Configurable with Code</td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">Configurable in the UI</td>
              <td>add-on</td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">SaaS Hosted</td>
              <td>-</td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">
                Teams, Team Members, and Permissions
              </td>
              <td> - </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">
                Insights and Analytics (coming soon)
              </td>
              <td> - </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">Data Governance (coming soon)</td>
              <td> - </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={12} className="text-start h5">
                SUPPORT
              </td>
            </tr>
            <tr>
              <td className="text-start">Access to the community</td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">Ticket-based Support</td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">Support during Business Hours</td>
              <td> - </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
              <td>
                <Image
                  src="/images/grouparoo-purple-checkmark.svg"
                  alt="Grouparoo blue checkmark"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <td className="text-start">Enhanced Support SLAs</td>
              <td> - </td>
              <td>add-on</td>
              <td>add-on</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
