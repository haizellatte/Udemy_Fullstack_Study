import { Request } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "./secretKey";

function responseJwtVerify(req: Request) {
  const accessToken = req.headers?.authorization.split("Bearer ")[1];
  const { sub: id } = jwt.verify(accessToken, JWT_SECRET_KEY);

  return id;
}

export default responseJwtVerify;
