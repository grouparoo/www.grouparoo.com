interface ComplexError extends Error {
  error: Error;
}
type ErrorSubscriber = (e: ComplexError) => void | Promise<void>;
export class EventDispatcher {
  subscriptions: Record<string, ErrorSubscriber> = {};

  set(error: ComplexError) {
    this.publish(error);
  }

  async publish(data: ComplexError) {
    const subscriptionKeys = Object.keys(this.subscriptions);
    for (const i in subscriptionKeys) {
      const key = subscriptionKeys[i];
      await this.subscriptions[key](data);
    }
  }

  subscribe(name: string, handler: ErrorSubscriber) {
    this.subscriptions[name] = handler;
  }

  unsubscribe(name: string) {
    delete this.subscriptions[name];
  }
}
