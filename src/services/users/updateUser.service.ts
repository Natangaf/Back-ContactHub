import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const updateUserService = async (
  userId: string,
  data: any
): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const oldUser = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const newUser = userRepository.create({
    ...oldUser,
    ...data,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default updateUserService;
