import { AppDataSource } from "../../data-source";
import User from "../../entities/User";
import AppError from "../../errors/AppError";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOne({
    where: {
      id,
    },
  });

  if (!account) {
    throw new AppError("User not found", 404);
  }

  await userRepository.delete(id);

  return true;
};

export default deleteUserService;
