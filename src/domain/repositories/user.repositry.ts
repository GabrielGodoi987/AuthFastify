import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  findById(id: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  createUser(user: Partial<UserEntity>): Promise<UserEntity>;
  findAllUsers(page: number, limit: number): Promise<UserEntity[]>;
}
