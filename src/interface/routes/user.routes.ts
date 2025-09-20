import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserUseCase } from "../../application/user/use-cases/user.useCase";
import { UserRepositoryImpl } from "../../infra/repositories/user.repository.impl";
import { UserController } from "../controllers/user.controller";

export function userRouteSetUp(fastify: FastifyInstance){
  const prefix = '/users';
  const userRepository = new UserRepositoryImpl();
  const service = new UserUseCase(userRepository);
  const userController = new UserController(service);

  fastify.get(prefix, (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send(userController.findAll());
  })
}