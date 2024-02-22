import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/secretKey";
import { usersInfo } from "../domain/auth/version1[메모리]/auth.service";

const publicRoutes = ["/auth/sign-up", "/auth/log-in"];

const authenticator = (req: Request, res: Response, next: NextFunction) => {
  if (publicRoutes.includes(req.url)) return next();

  const accessToken = req.headers.authorization?.split("Bearer ")[1];
  if (!accessToken) return res.sendStatus(401);

  try {
    const { sub: id } = jwt.verify(accessToken, JWT_SECRET_KEY);
    const user = usersInfo.find((user) => user.id === id);

    if (!user) return res.sendStatus(404);
    req.user = user;
  } catch (e) {
    return res.sendStatus(401);
  }

  next();
};

export default authenticator;
