import fastify, { FastifyInstance } from "fastify";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repositry";

export class UserRepositoryImpl implements UserRepository {
  private fastify: FastifyInstance = fastify();

  findById(id: string): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }
  async createUser(createUser: Partial<UserEntity>): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  findAllUsers(page: number, limit: number): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
}
