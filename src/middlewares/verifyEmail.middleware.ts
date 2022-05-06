import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import User from "../entities/User";

const verifyEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const checkEmailExists = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (checkEmailExists) {
    return res
      .status(401)
      .json({ status: "Error", message: "Email already exists" });
  }

  next();
};

export default verifyEmailMiddleware;
