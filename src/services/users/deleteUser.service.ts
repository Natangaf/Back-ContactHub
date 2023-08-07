import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  await userRepository.remove(user!);
};

export default deleteUserService;
