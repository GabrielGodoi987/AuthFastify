import { UserEntity } from "../../../domain/entities/user.entity";
import { ResponsePaginated } from "../../../domain/interfaces/response.paginated.interface";
import { UserRepository } from "../../../domain/repositories/user.repositry";
import { IUserService } from "../../../interface/services/Iuser.service";
import { QuerySchmea } from "../../commons/dto/search-paginated.schema";
import { NotFoundedException } from "../../commons/errors/no-found.exception";
import { CreateUserSchema } from "../dtos/create-user.dto";

export class UserUseCase implements IUserService {
  constructor(private userRepository: UserRepository) { }

  async findAll(querySchema: QuerySchmea): Promise<ResponsePaginated<UserEntity>> {
    const {page, limit} = querySchema;
    const findAllUsers = await this.userRepository.findAllUsers(querySchema);
    const countUsers = await this.userRepository.countUsers();

    return {
      currentPage: 0,
      next: 0,
      previous: 0,
      totalItems: countUsers,
      totalPages: Math.ceil(countUsers / limit),
      items: findAllUsers
    }
  }
  async findOne(id: string): Promise<UserEntity> {
    const userFetched = await this.userRepository.findById(id);
    if (!userFetched) {
      throw new Error('User not found')
    }
    return userFetched;
  }
  async createUser(userData: CreateUserSchema): Promise<Partial<UserEntity>> {
    const { email } = userData;
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new Error("User already exists");
    }

    return await this.userRepository.createUser(userData)
  }
  async updateUser(id: string, userData: Partial<CreateUserSchema>): Promise<Partial<UserEntity>> {
    const doesUserExists = await this.userRepository.findById(id);
    if (!doesUserExists) {
      throw new NotFoundedException('User not found')
    }

    return this.userRepository.updateUser(id, userData);
  }
  async deleteByIdentifier(identifier: string): Promise<void> {
    try {
      await this.findOne(identifier);
      await this.userRepository.deleteUser(identifier)
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}