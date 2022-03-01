import { Alert, Button, Tab } from "react-bootstrap";
import Link from "next/link";
import { EnterpriseCTA, HavingProblems } from "./Callouts";
import CLICommand from "./CLICommands";
import GeneratedConfigFile from "./GeneratedConfigFile";
import Image from "./Image";
import ImageInBrowserFrame from "../ImageInBrowserFrame";
import PluginsList from "./PluginsList";
import {
  PluginDocsIntegrationNotes,
  PluginDocsInstallation,
  PluginDocsLinks,
  OptionsList,
} from "./plugins/Index";
import RuleOpsTable from "./RuleOpsTable";
import Tabs from "./Tabs";
import ValidateAndApplyConfig from "./ValidateAndApplyConfig";
import AppExamplesReadme from "./AppExamplesReadme";
import DestinationSyncModes from "./DestinationSyncModes";

// The exported components are available for use in docs MDX files.
export {
  Alert,
  Button,
  CLICommand,
  DestinationSyncModes,
  EnterpriseCTA,
  GeneratedConfigFile,
  HavingProblems,
  Image,
  ImageInBrowserFrame,
  Link,
  PluginDocsInstallation,
  PluginDocsIntegrationNotes,
  PluginDocsLinks,
  PluginsList,
  OptionsList,
  RuleOpsTable,
  Tab,
  Tabs,
  ValidateAndApplyConfig,
  AppExamplesReadme,
};
