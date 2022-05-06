import { Router } from "express";

import UsersController from "../controllers/users.controller";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";

const usersController = new UsersController();

const usersRouter = Router();

usersRouter.get("", usersController.index);
usersRouter.post("", verifyEmailMiddleware, usersController.store);

usersRouter.get("/:id", usersController.show);
usersRouter.patch("/:id", verifyEmailMiddleware, usersController.update);
usersRouter.delete("/:id", usersController.delete);

export default usersRouter;
