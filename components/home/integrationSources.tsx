import IntegrationButton from "../home/integrationButton";

export default function IntegrationSources() {
  return (
    <>
      <IntegrationButton
        name="MySQL"
        slug="mysql"
        type="source"
        image="mysql.png"
      />
      &nbsp; &nbsp;
      <IntegrationButton
        name="Postgres"
        slug="postgres"
        type="source"
        image="postgres.svg"
      />
      &nbsp; &nbsp;
      <IntegrationButton
        name="Redshift"
        slug="redshift"
        type="source"
        image="redshift.svg"
      />
      &nbsp; &nbsp;
      <IntegrationButton
        name="BigQuery"
        slug="bigquery"
        type="source"
        image="bigquery.png"
      />
    </>
  );
}
