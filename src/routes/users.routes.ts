import { Router } from "express";

import UsersController from "../controllers/users.controller";

const usersController = new UsersController();

const usersRouter = Router();

usersRouter.get("", usersController.store);
usersRouter.post("", usersController.index);

usersRouter.get("/:id", usersController.show);
usersRouter.patch("/:id", usersController.update);
usersRouter.delete("/:id", usersController.delete);

export default usersRouter;
