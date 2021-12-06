type Subscriber<T> = (e: T) => void | Promise<void>;
export class EventDispatcher<T = Error> {
  subscriptions: Record<string, Subscriber<T>> = {};

  set(error: T) {
    this.publish(error);
  }

  async publish(data: T) {
    const subscriptionKeys = Object.keys(this.subscriptions);
    for (const i in subscriptionKeys) {
      const key = subscriptionKeys[i];
      await this.subscriptions[key](data);
    }
  }

  subscribe(name: string, handler: Subscriber<T>) {
    this.subscriptions[name] = handler;
  }

  unsubscribe(name: string) {
    delete this.subscriptions[name];
  }
}
