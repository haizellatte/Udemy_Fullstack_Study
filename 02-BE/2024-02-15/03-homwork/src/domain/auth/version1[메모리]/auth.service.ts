import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../../config/secretKey";

export const usersInfo: Array<{ id: string; encryptedPassword: string }> = [];

const signUp = async (req: Request, res: Response) => {
  const { id, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 15);

  usersInfo.push({ id, encryptedPassword });
  res.json(encryptedPassword);
};

const logIn = async (req: Request, res: Response) => {
  const { id, password } = req.body;
  const loginUser = usersInfo.find((user) => user.id === id);

  if (!loginUser) return res.sendStatus(404);

  const isVerified = await bcrypt.compare(
    password,
    loginUser.encryptedPassword
  );

  if (!isVerified) return res.sendStatus(400);

  const accessToken = jwt.sign({ id }, JWT_SECRET_KEY, { subject: id });
  res.json(accessToken);
};

const authService = {
  signUp,
  logIn,
};

export default authService;
