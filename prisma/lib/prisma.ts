import { PrismaClient } from "@prisma/client";

declare global {
<<<<<<< HEAD
    // eslint-disable-next-line no-var
    var prismaGlobal: PrismaClient;
}

if (process.env.NODE_ENV !== "production") {
    if (!global.prismaGlobal) {
        global.prismaGlobal = new PrismaClient();
    }
=======
  // eslint-disable-next-line no-var
  var prismaGlobal: PrismaClient;
}

if (process.env.NODE_ENV !== "production") {
  if (!global.prismaGlobal) {
    global.prismaGlobal = new PrismaClient();
  }
>>>>>>> 991b0ebe0017e5e18b52984a75ac679529f9e9eb
}

const prisma = global.prismaGlobal ?? new PrismaClient();

export default prisma;
