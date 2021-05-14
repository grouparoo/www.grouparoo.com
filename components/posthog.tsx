import { isBrowser } from "../utils/isBrowser";
import posthog from "posthog-js";

const posthogHost = "https://posthog.grouparoo.com";
const apiKey = "oOnrFJPFSh7Ykn8p5u2VakV77rotgc7vKwoinolc4WA";

export default function Posthog() {
  if (!isBrowser()) return null;
  if (window?.location?.hostname !== "www.grouparoo.com") return null;

  posthog.init(apiKey, { api_host: posthogHost });
  return null;
}
