import { QuerySchmea } from "../../application/commons/dto/search-paginated.schema";
import { CreateUserSchema } from "../../application/user/dtos/create-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { ResponsePaginated } from "../../domain/interfaces/response.paginated.interface";

export interface IUserService{
  findAll(querySchema: QuerySchmea): Promise<ResponsePaginated<UserEntity>>;
  findOne(identifier: String): Promise<UserEntity>;
  createUser(userData: CreateUserSchema): Promise<Partial<UserEntity>>;
  updateUser(id: string, userData: Partial<CreateUserSchema>): Promise<Partial<UserEntity>>;
  deleteByIdentifier(identifier: string): Promise<void>;
}