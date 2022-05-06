import { AppDataSource } from "../../data-source";
import User from "../../entities/User";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  return users;
};

export default listUsersService;
