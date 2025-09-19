'use strict';

import { PrismaClient } from "@prisma/client";
import { DoneFuncWithErrOrRes, FastifyInstance } from "fastify";
import fp from "fastify-plugin";

function prismaPlugin(fastify: FastifyInstance) {
  const prisma = new PrismaClient();

  fastify.decorate("prisma", prisma);

  fastify.addHook("onClose", async (fastify: FastifyInstance) => {
    await fastify.prisma.$disconnect();
  });
}


export default fp(prismaPlugin, { name: "prismaPlugin" });