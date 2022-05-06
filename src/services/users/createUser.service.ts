import { AppDataSource } from "../../data-source";
import User from "../../entities/User";
import { IUserCreate } from "../../interfaces/users";

const createUserService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create({ name, email, password, age });

  await userRepository.save(user);

  return user;
};

export default createUserService;
