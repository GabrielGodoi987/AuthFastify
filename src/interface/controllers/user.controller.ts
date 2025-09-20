import { IUserService } from "../services/Iuser.service";
import { UserEntity } from "../../domain/entities/user.entity";
import { ResponsePaginated } from "../../domain/interfaces/response.paginated.interface";

export class UserController {
  constructor(private readonly userService: IUserService){}

  findAll(): Promise<ResponsePaginated<UserEntity[]>>{}
  findOne(): Promise<Partial<UserEntity>>{}
  create(): Promise<Partial<UserEntity>>{}
  update(){}
  delete(identifier: string): Promise<void>{
    try {
    } catch (error) {
    }
  }
}