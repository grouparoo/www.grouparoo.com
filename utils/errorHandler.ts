import { EventDispatcher } from "./eventDispatcher";

export class ErrorHandler extends EventDispatcher {
  error: Error | string;

  constructor() {
    super();

    this.error = null;

    this.subscribe("_internal", (e: Error | string) => {
      this.error = e;
    });
  }
}
