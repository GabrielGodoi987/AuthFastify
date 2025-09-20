import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AppController } from "../controllers/app.controller";
import { AppService } from "../../application/app/use-cases/app.service";

export function appRoutesSetUp(app: FastifyInstance) {
  const service = new AppService();
  const appController = new AppController(service);
  app.get("/", (req: FastifyRequest, reply: FastifyReply) => appController.getHello(req, reply));
}
