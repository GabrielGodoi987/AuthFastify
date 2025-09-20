import { FastifyReply, FastifyRequest } from "fastify";
import { AppService } from "../../application/app/use-cases/app.service";

export class AppController {
  constructor(private readonly appService: AppService) {}
  async getHello(req: FastifyRequest, reply: FastifyReply) {
    const data = await this.appService.getHello();
    console.log(data);
    return reply.status(200).send({
      status: 200,
      message: data
    });
  }
}
