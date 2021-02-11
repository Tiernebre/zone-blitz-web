import { CreateUserRequest } from "./CreateUserRequest";
import { User } from "./User";

/**
 * Service that allows for CRUD operations on the
 * Users domain object.
 */
export interface UserService {
  /**
   * Creates a user given a specific request. Returns
   * the user that was created.
   *
   * @param createRequest The create request that contains the specific details about
   * the user to create.
   */
  createOne(createRequest: CreateUserRequest): Promise<User>;
}
