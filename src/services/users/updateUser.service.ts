import { AppDataSource } from "../../data-source";
import User from "../../entities/User";
import AppError from "../../errors/AppError";
import { IUpdateUser } from "../../interfaces/users";

const updateUserService = async ({
  age,
  email,
  name,
  password,
  id,
}: IUpdateUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOne({
    where: {
      id,
    },
  });

  if (!account) {
    throw new AppError("User not found", 404);
  }

  name ? (account.name = name) : account.name;
  email ? (account.email = email) : account.email;
  password ? (account.password = password) : account.password;
  age ? (account.age = age) : account.age;
  account.updated_at = new Date();

  await userRepository.update(id, { ...account });

  return true;
};

export default updateUserService;
