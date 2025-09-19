import { Users } from "@prisma/client";

export class UserEntity implements Users {
  name: string;
  id: string;
  email: string;
  password: string;

  constructor(name: string, id: string, email: string, password: string) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
