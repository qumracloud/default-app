import type { QumraClient } from "../client";

export class BaseModule {
  protected client: QumraClient;

  constructor(client: QumraClient) {
    this.client = client;
  }
}
