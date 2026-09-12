import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";
import { config } from "../config/config.js";

const adapter = new PrismaMariaDb(config.databaseUrl);

export const prisma = new PrismaClient({ adapter });
