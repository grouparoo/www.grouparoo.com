import IntegrationButton from "../home/integrationButton";

export default function IntegrationDestinations() {
  return (
    <>
      <IntegrationButton
        name="Hubspot"
        type="destination"
        image="hubspot.svg"
      />
      &nbsp; &nbsp;
      <IntegrationButton
        name="Sailthru"
        type="destination"
        image="sailthru.png"
      />
      &nbsp; &nbsp;
      <IntegrationButton
        name="Mailchimp"
        type="destination"
        image="mailchimp.svg"
      />
      &nbsp; &nbsp;
      <IntegrationButton
        name="Zendesk"
        type="destination"
        image="zendesk.svg"
      />
    </>
  );
}
