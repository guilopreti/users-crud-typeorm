import { Router } from "express";

import UsersController from "../controllers/users.controller";
import {
  userCreateSchema,
  validateUserCreateMdw,
} from "../middlewares/validateUserCreate.middleware";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import verifyIdSyntaxMiddleware from "../middlewares/verifyIdSyntax.middleware";

const usersController = new UsersController();

const usersRouter = Router();

usersRouter.get("", usersController.index);
usersRouter.post(
  "",
  validateUserCreateMdw(userCreateSchema),
  verifyEmailMiddleware,
  usersController.store
);

usersRouter.get("/:id", verifyIdSyntaxMiddleware, usersController.show);
usersRouter.patch("/:id", verifyIdSyntaxMiddleware, usersController.update);
usersRouter.delete("/:id", verifyIdSyntaxMiddleware, usersController.delete);

export default usersRouter;
