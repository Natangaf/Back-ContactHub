import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import {
  TLoggedResponse,
  TLoginRequest,
  TLoginResponse,
} from "../../interfaces/login/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { userSchemaResponse } from "../../schemas/users.schema";

const createTokenService = async ({
  email,
  password,
}: TLoginRequest): Promise<TLoggedResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Wrong email or password!", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Whrong email or password!", 403);
  }

  const token = jwt.sign(
    {
      userName: user.name,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1h",
      subject: user.id,
    }
  );
  const loggedUser = userSchemaResponse.parse(user);

  return { token, loggedUser };
};

export { createTokenService };
