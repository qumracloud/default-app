import type { PrismaClient } from "@prisma/client/extension";
import { fetchQuery } from "./fetchQuery";
import { adminAuthenticate } from "./utils/adminAuthenticate";

export interface QumraClientOptions {
  apiKey: string;
  secretKey: string;
  sessionStorage: PrismaClient
}

export class QumraClient {
  apiKey: string;
  secretKey: string;
  sessionStorage: PrismaClient;

  constructor(options: QumraClientOptions) {
    this.apiKey = options.apiKey;
    this.secretKey = options.secretKey;
    this.sessionStorage = options.sessionStorage;
  }

  private getHeaders() {
    return {
      "x-api-key": this.apiKey,
      "x-secret-key": this.secretKey,
    };
  }

  request<TResponse = any, TVariables = any, TBody = any>(
    options: FetchClientOptions<TVariables, TBody>
  ) {
    return fetchQuery<TResponse, TVariables, TBody>({
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
    });
  }

  authenticate = {
    admin: (request: Request) =>
      adminAuthenticate({
        request,
        client: this,
      }),
  };
}
