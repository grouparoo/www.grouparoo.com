import IntegrationButton from "../home/integrationButton";

export default function IntegrationDestinations() {
  return (
    <>
      <IntegrationButton
        name="Hubspot"
        slug="hubspot"
        type="destination"
        image="hubspot.svg"
      />
      &nbsp; &nbsp;
      <IntegrationButton
        name="Sailthru"
        slug="sailthru"
        type="destination"
        image="sailthru.png"
      />
      &nbsp; &nbsp;
      <IntegrationButton
        name="Mailchimp"
        slug="mailchimp"
        type="destination"
        image="mailchimp.svg"
      />
      &nbsp; &nbsp;
      <IntegrationButton
        name="Zendesk"
        slug="zendesk"
        type="destination"
        image="zendesk.svg"
      />
    </>
  );
}
