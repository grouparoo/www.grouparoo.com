import { Alert, Button, Tab } from "react-bootstrap";
import Link from "next/link";

import {
  ConfigToggle,
  EnterpriseCTA,
  HavingProblems,
  UIConfigPrereqs,
} from "./callouts";
import CLICommand from "./CLICommands";
import Image from "./image";
import PluginsList from "./pluginsList";
import {
  PluginDocsCreateApp,
  PluginDocsInstallation,
  PluginDocsLinks,
} from "./plugins";
import RuleOpsTable from "./ruleOpsTable";
import Tabs from "./tabs";
import ValidateAndApplyConfig from "./validateAndApplyConfig";

// The exported components are available for use in docs MDX files.
export {
  Alert,
  Button,
  CLICommand,
  ConfigToggle,
  EnterpriseCTA,
  HavingProblems,
  Image,
  Link,
  PluginDocsCreateApp,
  PluginDocsInstallation,
  PluginDocsLinks,
  PluginsList,
  RuleOpsTable,
  Tab,
  Tabs,
  UIConfigPrereqs,
  ValidateAndApplyConfig,
};
