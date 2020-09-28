import IntegrationButton from "../home/integrationButton";

export default function IntegrationSources() {
  return (
    <>
      <IntegrationButton name="MySQL" type="source" image="mysql.png" />
      &nbsp; &nbsp;
      <IntegrationButton name="Postgres" type="source" image="postgres.svg" />
      &nbsp; &nbsp;
      <IntegrationButton name="Redshift" type="source" image="redshift.svg" />
      &nbsp; &nbsp;
      <IntegrationButton name="BigQuery" type="source" image="bigquery.png" />
    </>
  );
}
