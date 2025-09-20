import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserUseCase } from "../../application/user/use-cases/user.useCase";
import { UserRepositoryImpl } from "../../infra/repositories/user.repository.impl";
import { UserController } from "../controllers/user.controller";
import { CreateUser } from "../../application/user/dtos/create-user.dto";

export function userRouteSetUp(fastify: FastifyInstance) {
  const prefix = '/users';
  const userRepository = new UserRepositoryImpl();
  const service = new UserUseCase(userRepository);
  const userController = new UserController(service);

  fastify.get(prefix, {

  }, (request: FastifyRequest<{ Querystring: { page: number; limit: number } }>, reply: FastifyReply) => {
    const { page, limit } = request.query;
    return reply.send(userController.findAll({ page, limit }));
  })

  fastify.post(prefix, {
    schema: {
      body: CreateUser
    }
  }, (request: FastifyRequest, reply: FastifyReply) => {
    const createUserData = CreateUser.parse(request.body)
    reply.send(userController.create(createUserData));
  })
}