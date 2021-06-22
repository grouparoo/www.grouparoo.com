import { Alert, Button, Tab } from "react-bootstrap";
import Link from "next/link";

import { EnterpriseCTA, HavingProblems } from "./callouts";
import CLICommand from "./CLICommands";
import Image from "./image";
import ImageInBrowserFrame from "../imageInBrowserFrame";
import PluginsList from "./pluginsList";
import {
  PluginDocsColumnarDestination,
  PluginDocsColumnarSource,
  PluginDocsCreateApp,
  PluginDocsInstallation,
  PluginDocsLinks,
  OptionsList,
} from "./plugins";
import RuleOpsTable from "./ruleOpsTable";
import Tabs from "./tabs";
import ValidateAndApplyConfig from "./validateAndApplyConfig";
import AppExamplesReadme from "./appExamplesReadme";

// The exported components are available for use in docs MDX files.
export {
  Alert,
  Button,
  CLICommand,
  EnterpriseCTA,
  HavingProblems,
  Image,
  ImageInBrowserFrame,
  Link,
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
