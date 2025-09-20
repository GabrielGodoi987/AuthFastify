import { PrismaClient } from "@prisma/client";
import { FastifyReply } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
    errorHandler: (err, request: FastifyRequest, reply: FastifyReply) => any
  }
  interface FastifyRequest {
    authorizationToken?: string | null;
  }
}
