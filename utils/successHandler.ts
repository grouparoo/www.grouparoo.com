import { EventDispatcher } from "./eventDispatcher";

export class SuccessHandler extends EventDispatcher<string> {
  message: string;

  constructor() {
    super();

    this.message = null;

    this.subscribe("_internal", (m) => {
      this.message = m;
    });
  }
}
