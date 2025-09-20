import { IUserService } from "../services/Iuser.service";
import { UserEntity } from "../../domain/entities/user.entity";
import { ResponsePaginated } from "../../domain/interfaces/response.paginated.interface";
import { CreateUserSchema } from "../../application/user/dtos/create-user.dto";

export class UserController {
  constructor(private readonly userService: IUserService) { }

  async findAll({ page, limit }: { page: number, limit: number }): Promise<ResponsePaginated<UserEntity>> {
    return await this.userService.findAll({ page, limit });
  }
  async findOne(identifier: string): Promise<Partial<UserEntity>> {
    return await this.userService.findOne(identifier);
  }
  async create(userSchema: CreateUserSchema): Promise<Partial<UserEntity>> {
    return await this.userService.createUser(userSchema);
  }
  async update(id: string, userSchema: Partial<CreateUserSchema>) {
    return await this.userService.updateUser(id, userSchema);
  }
  async delete(identifier: string): Promise<{ message: string }> {
    try {
      await this.userService.deleteByIdentifier(identifier);
      return { message: 'user successfully deleted' }
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}