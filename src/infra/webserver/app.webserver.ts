import fastify from "fastify";
import { appRoutesSetUp } from "../../interface/routes/app.route";
import prismaPlugin from "../plugins/prisma.plugin";

export function bootstrap() {
  const server = fastify()

  server.register(prismaPlugin);

  // routes registration
  appRoutesSetUp(server);


  server.listen({ port: 2000 }, (err, address) => {
    if (err) {
      console.error(err);
      server.log.error(err);
      process.exit();
    }

    console.log(`Server is running at ${address}`);
  });
}
