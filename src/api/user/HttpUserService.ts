import { HttpClient } from "../http/HttpClient";
import { CreateUserRequest } from "./CreateUserRequest";
import { User } from "./User";
import { UserService } from "./UserService";

export class HttpUserService implements UserService {
  public constructor(private readonly httpClient: HttpClient) {}

  public createOne(createRequest: CreateUserRequest): Promise<User> {
    return this.httpClient.post("/users", createRequest);
  }
}
