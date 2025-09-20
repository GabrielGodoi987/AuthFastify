import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/repositories/user.repositry";

export class UserRepositoryImpl implements UserRepository {
  private prisma = new PrismaClient();

  async findAllUsers({page, limit}:{page: number, limit: number}): Promise<UserEntity[]> {
    return await this.prisma.users.findMany({
      skip: page,
      take: limit
    });
  }

  async countUsers(): Promise<number>{
    return await this.prisma.users.count()
  }

  async findById(id: string): Promise<UserEntity | null> {
    return await this.prisma.users.findUnique({
      where: {
        id
      }
    });
  }
  findByEmail(email: string): Promise<UserEntity | null> {
    return this.prisma.users.findUnique({
      where: {
        email
      }
    })
  }
  async createUser(user: UserEntity): Promise<Partial<UserEntity>> {
    return await this.prisma.users.create({
      data: user,
      omit: {
        id: true
      }
    });
  }

  updateUser(id: string, userData: Partial<UserEntity>): Promise<UserEntity> {
      return this.prisma.users.update({
        where: {
          id
        },
        data: userData
      })
  }

  async deleteUser(id: string): Promise<void> {
      await this.prisma.users.delete({
        where: {
          id
        }
      })
  }
}