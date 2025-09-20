import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  findById(id: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  createUser(userData: Partial<UserEntity>): Promise<Partial<UserEntity>>;
  findAllUsers({page, limit}: {page: number, limit: number}): Promise<UserEntity[]>;
  countUsers(): Promise<number>;
  updateUser(id: string, userData: Partial<UserEntity>): Promise<UserEntity>;
  deleteUser(identifier: string): Promise<void>
}
