import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { userSchemaResponse } from "../../schemas/users.schema";
import {
  TUserRequest,
  TUserResponse,
} from "../../interfaces/users/users.interfaces";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const { email, name, password, phone } = data;
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  });

  const findPhone = await userRepository.findOne({
    where: {
      phone,
    },
  });

  if (findPhone) {
    throw new AppError("Phone already registered!", 409);
  }

  if (findUser) {
    throw new AppError("Email already registered!", 409);
  }

  const hashedPassword = await hash(password, 10);
  const user = userRepository.create({
    name,
    email,
    password: hashedPassword,
    phone,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export default createUserService;
