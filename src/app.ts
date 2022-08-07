import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import router from "./routes";
import AppError from "./errors/AppError";

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "Error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "Error",
    message: err.message,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App running!");
});
