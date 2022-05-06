import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import showUserService from "../services/users/showUser.service";

class UsersController {
  async store(req: Request, res: Response) {
    const { name, email, password, age } = req.body;

    const newUser = await createUserService({ name, email, password, age });

    return res.status(201).json(newUser);
  }

  async index(req: Request, res: Response) {
    const usersList = await listUsersService();

    return res.json(usersList);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const user = await showUserService(id);

    return res.json(user);
  }

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteUserService(id);

    return res.json({ message: "User deleted with sucess" });
  }
}

export default UsersController;
