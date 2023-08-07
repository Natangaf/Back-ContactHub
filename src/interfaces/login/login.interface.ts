import {
  loggedResponseSchema,
  loginResponseSchema,
} from "../../schemas/login.schema";
import { z } from "zod";

type TLoginRequest = {
  email: string;
  password: string;
};

type TLoginResponse = z.infer<typeof loginResponseSchema>;
type TLoggedResponse = z.infer<typeof loggedResponseSchema>;

export { TLoginRequest, TLoginResponse, TLoggedResponse };
