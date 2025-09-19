import { UserRepository } from "../../../domain/repositories/user.repositry";
import { CreateUserSchema } from "../dtos/create-user.dto";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: CreateUserSchema) {
    const { email } = userData;
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new Error("User already exists");
    }
  }
}
