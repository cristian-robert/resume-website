import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as { prisma?: PrismaClient };

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ["query", "error", "warn"],
  });
};

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prismaClientSingleton();
}

const prisma = globalForPrisma.prisma;

export { prisma };
