import { UserEntity } from "../../../domain/entities/user.entity";
import { ResponsePaginated } from "../../../domain/interfaces/response.paginated.interface";
import { UserRepository } from "../../../domain/repositories/user.repositry";
import { IUserService } from "../../../interface/services/Iuser.service";
import { CreateUserSchema } from "../dtos/create-user.dto";

export class UserUseCase implements IUserService{
  constructor(private userRepository: UserRepository) {}
  
  findAll(): Promise<ResponsePaginated<UserEntity[]>> {
    throw new Error("Method not implemented.");
  }
  findOne(): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  async createUser(userData: CreateUserSchema): Promise<Partial<UserEntity>> {
    const { email } = userData;
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new Error("User already exists");
    }

    return await this.userRepository.createUser(userData)
  }
  updateUser(): Promise<Partial<UserEntity>> {
    throw new Error("Method not implemented.");
  }
  deleteByIdentifier(identifier: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}