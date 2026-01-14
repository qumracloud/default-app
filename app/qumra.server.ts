import { prisma } from "prisma/lib/prisma";
import { QumraClient } from "sdk/client";
// Initialize the client with your credentials
// In a real app, use environment variables like process.env.QUMRA_API_KEY

const Qumra = new QumraClient({
  apiKey: process.env.QUMRA_API_KEY as string, // client_id
  secretKey: process.env.QUMRA_API_SECRET as string, // client_secret
  sessionStorage: prisma
});

export default Qumra;

export const query = Qumra.request;
export const authenticate = Qumra.authenticate;
