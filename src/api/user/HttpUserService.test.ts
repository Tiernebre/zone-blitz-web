import { HttpClient } from "../http/HttpClient";
import { CreateUserRequest } from "./CreateUserRequest";
import { HttpUserService } from "./HttpUserService";
import { object, when } from "testdouble";

describe("HttpUserService", () => {
  let httpUserService: HttpUserService;
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = object<HttpClient>();
    httpUserService = new HttpUserService(httpClient);
  });

  describe("createOne", () => {
    it("returns the created user from the given request", async () => {
      const expectedUser = {
        id: 1,
        email: "test.foo@foo.com",
      };
      const createRequest: CreateUserRequest = {
        email: "test.foo@foo.com",
        password: "someTestPassword12345!",
        confirmationPassword: "someTestPassword12345!",
        securityQuestions: [
          {
            id: 1,
            answer: "foo",
          },
        ],
      };
      when(httpClient.post("/users", createRequest)).thenResolve(expectedUser);
      const createdUser = await httpUserService.createOne(createRequest);
      expect(createdUser).toEqual(expectedUser);
    });
  });
});
