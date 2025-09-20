import fastify from "fastify";
import { appRoutesSetUp } from "../../interface/routes/app.route";
import prismaPlugin from "../plugins/prisma.plugin";
import { userRouteSetUp } from "../../interface/routes/user.routes";
import jwt from '@fastify/jwt';
import { JWT_SECRET } from "../constants/envs.constants";

export function bootstrap() {
  const server = fastify()

  // plugins
  server.register(prismaPlugin);
  server.register(jwt, {
    secret: String(JWT_SECRET)
  })

  // routes registration
  appRoutesSetUp(server);
  userRouteSetUp(server);


  server.listen({ port: 2000 }, (err, address) => {
    if (err) {
      console.error(err);
      server.log.error(err);
      process.exit();
    }

    console.log(`Server is running at ${address}`);
  });
}
