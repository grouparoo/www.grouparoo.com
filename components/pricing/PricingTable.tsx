import { Row, Col, Table } from "react-bootstrap";
import Link from "next/link";
import Image from "../Image";
import styles from "./PricingTable.module.scss";
export const PricingTable = () => {
  return (
    <Row className="mt-3 mx-auto">
      <Col style={{ overflowX: "scroll" }}>
        <Table
          className={`text-center bg-white ${styles.removeHeadBorders}`}
          style={{ minWidth: 600 }}
        >
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Community</th>
              <th scope="col" className={styles.clearBorders}>
                Standard Cloud
              </th>
              <th scope="col">Enterprise Cloud</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="text-start h5">
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
              <td>License Available</td>
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
              <td colSpan={4} className="text-start h5">
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
              <td>Add-on</td>
              <td>Add-on</td>
            </tr>
            <tr>
              <td colSpan={4} className="text-start h5">
                PRICING / USAGE
              </td>
            </tr>
            <tr className="align-middle">
              <td className="text-start">Monthly usage/price</td>
              <td>
                Free
                <br />
                <br />
                Enterprise UI: $100/mo
              </td>
              <td>
                <table className="table mb-0">
                  <tbody>
                    <tr className="w-100 mx-auto">
                      <td className="border-bottom-1 border-bottom-light">
                        100K synced Records: $150/mo
                      </td>
                    </tr>
                    <tr className="w-100 mx-auto">
                      <td className="border-bottom-1 border-bottom-light">
                        300K synced Records: $300/mo
                      </td>
                    </tr>
                    <tr className="w-100 mx-auto">
                      <td className="border-bottom-0">
                        1,000,000 synced Records: $600/mo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                &gt; 1,000,000 synced Records:
                <br />
                <Link href="/meet">Contact sales</Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
