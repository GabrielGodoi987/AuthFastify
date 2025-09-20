import { CreateUserSchema } from "../../application/user/dtos/create-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { ResponsePaginated } from "../../domain/interfaces/response.paginated.interface";

export interface IUserService{
  findAll(): Promise<ResponsePaginated<UserEntity[]>>;
  findOne(identifier: String): Promise<UserEntity>;
  createUser(userData: CreateUserSchema): Promise<Partial<UserEntity>>;
  updateUser(userData: Partial<CreateUserSchema>): Promise<Partial<UserEntity>>;
  deleteByIdentifier(identifier: string): Promise<void>;
}