import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadExists = this.usersRepository.findByEmail(email);
    if (emailAlreadExists) {
      throw new Error("Message de error");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
