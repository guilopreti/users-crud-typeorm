import { AppDataSource } from "../../data-source";
import User from "../../entities/User";
import AppError from "../../errors/AppError";

const showUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOne({
    where: {
      id,
    },
  });

  if (!account) {
    throw new AppError("User not found", 404);
  }

  return account;
};

export default showUserService;
