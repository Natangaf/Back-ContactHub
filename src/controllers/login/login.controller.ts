import { Response, Request } from "express";
import { createTokenService } from "../../services/login/createToken.service";
import { TLoginResponse } from "../../interfaces/login/login.interface";

const createTokenController = async (
  req: Request,
  res: Response
): Promise<Response<TLoginResponse>> => {
  const { email, password } = req.body;

  const data = await createTokenService({ email, password });

  return res.json(data);
};

export { createTokenController };
