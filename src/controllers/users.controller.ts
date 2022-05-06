import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";

class UsersController {
  async store(req: Request, res: Response) {
    const { name, email, password, age } = req.body;

    const newUser = await createUserService({ name, email, password, age });

    return res.status(201).json(newUser);
  }

  async index(req: Request, res: Response) {}

  async show(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}

export default UsersController;
