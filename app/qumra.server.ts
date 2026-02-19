<<<<<<< HEAD
import { AppDistribution, qumraApp } from "@qumra/app-react-router";
import { PrismaSessionStorage } from "@qumra/app-session-storage-prisma";
import prisma from "../prisma/lib/prisma";

=======
import { qumraApp } from "@qumra/app-react-router";
import { PrismaSessionStorage } from "@qumra/app-session-storage-prisma";
import prisma  from "../prisma/lib/prisma";
>>>>>>> 991b0ebe0017e5e18b52984a75ac679529f9e9eb
// Initialize the client with your credentials
// In a real app, use environment variables like process.env.QUMRA_API_KEY

// apiKey: process.env.QUMRA_API_KEY as string, // client_id
// secretKey: process.env.QUMRA_API_SECRET as string, // client_secret
// sessionStorage: prisma
<<<<<<< HEAD

=======
>>>>>>> 991b0ebe0017e5e18b52984a75ac679529f9e9eb
const Qumra = qumraApp({
  apiKey: process.env.QUMRA_API_KEY as string, // client_id
  secretKey: process.env.QUMRA_API_SECRET as string, // client_secret
  sessionStorage: new PrismaSessionStorage(prisma),
  appUrl: process.env.QUMRA_APP_URL as string,
<<<<<<< HEAD
  distribution: AppDistribution.AppStore
=======
>>>>>>> 991b0ebe0017e5e18b52984a75ac679529f9e9eb

});

export default Qumra;

export const authenticate = Qumra.authenticate;
