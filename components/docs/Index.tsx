import { Alert, Button, Tab } from "react-bootstrap";
import Link from "next/link";

import { EnterpriseCTA, HavingProblems } from "./Callouts";
import CLICommand from "./CLICommands";
import GeneratedConfigFile from "./GeneratedConfigFile";
import Image from "./Image";
import ImageInBrowserFrame from "../ImageInBrowserFrame";
import PluginsList from "./PluginsList";
import {
  PluginDocsCalculatedPropertySource,
  PluginDocsColumnarDestination,
  PluginDocsColumnarSource,
  PluginDocsCreateApp,
  PluginDocsInstallation,
  PluginDocsLinks,
  OptionsList,
} from "./plugins/Index";
import RuleOpsTable from "./RuleOpsTable";
import Tabs from "./Tabs";
import ValidateAndApplyConfig from "./ValidateAndApplyConfig";
import AppExamplesReadme from "./AppExamplesReadme";

// The exported components are available for use in docs MDX files.
export {
  Alert,
  Button,
  CLICommand,
  EnterpriseCTA,
  GeneratedConfigFile,
  HavingProblems,
  Image,
  ImageInBrowserFrame,
  Link,
  PluginDocsCalculatedPropertySource,
  PluginDocsColumnarDestination,
  PluginDocsColumnarSource,
  PluginDocsCreateApp,
  PluginDocsInstallation,
  PluginDocsLinks,
  PluginsList,
  OptionsList,
  RuleOpsTable,
  Tab,
  Tabs,
  ValidateAndApplyConfig,
  AppExamplesReadme,
};
