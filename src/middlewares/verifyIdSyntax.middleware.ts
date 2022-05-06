import { Request, Response, NextFunction } from "express";

const verifyIdSyntaxMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (
    !id.match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    )
  ) {
    return res.status(400).json({ status: "Error", message: "User not found" });
  }

  next();
};

export default verifyIdSyntaxMiddleware;
