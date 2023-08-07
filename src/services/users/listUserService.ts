import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schema";
import { TUserResponse } from "../../interfaces/users/users.interfaces";
const listUserService = async (
  userId: string
): Promise<TUserResponse | null> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (user) {
    return userSchemaResponse.parse(user);
  }

  return null;
};

export default listUserService;
