import { CreateUserSecurityQuestionRequest } from "./CreateUserSecurityQuestionRequest";

export interface CreateUserRequest {
  email: string;
  password: string;
  confirmationPassword: string;
  securityQuestions: CreateUserSecurityQuestionRequest[];
}
