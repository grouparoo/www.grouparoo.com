import { titleize } from "../../utils/inflectors";

type SyncMode = "append" | "create" | "sync" | "update" | "upsert";

interface Props {
  appName: string;
  syncModes?: SyncMode[];
  recordsName?: string;
}

const getSyncModeText = (
  syncMode: SyncMode,
  appName: string,
  recordsName: string
) => {
  switch (syncMode) {
    case "append":
      return `Always create ${appName} ${recordsName}.
        This option treats all records as new records.`;

    case "create":
      return `Create new ${appName} ${recordsName} if they don‘t exist. This option
        looks for new records only.`;

    case "sync":
      return `Create, update, and delete ${appName} ${recordsName}. This option looks
        for new records, changes to existing records, and deletions.`;

    case "update":
      return `Only update those ${recordsName} that already exist in ${appName}. Do
        not add or remove ${recordsName}. This option will only update existing
        ${recordsName} in ${appName}.`;

    case "upsert":
      return (
        <>
          <em>Only</em> add and update {appName} {recordsName}, no removal. This
          option looks for new {recordsName} to add to {appName} and changes to
          existing {appName} {recordsName}, but does not keep track of
          deletions.
        </>
      );
    default:
      return null;
  }
};

const DestinationSyncModes: React.FC<Props> = ({
  appName,
  syncModes = ["sync", "update", "upsert"],
  recordsName = "Records",
}) => (
  <>
    <h3>Sync Modes</h3>
    <p>
      The Destination’s sync mode determines what {recordsName} to update in{" "}
      {appName}. The following sync modes are supported:
    </p>
    <ul>
      {syncModes.sort().map((syncMode) => (
        <li key={`syncMode-${syncMode}`}>
          <strong>{titleize(syncMode)}</strong>:{" "}
          {getSyncModeText(syncMode, appName, recordsName)}
        </li>
      ))}
    </ul>
  </>
);

export default DestinationSyncModes;
