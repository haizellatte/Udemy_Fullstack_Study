import bcrypt from "bcrypt";
import { Request, Response } from "express";
import fs from "fs/promises";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../../config/secretKey";

const signUp = async (req: Request, res: Response) => {
  const { id, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 15);

  const usersInfo = await fs
    .readFile("./src/data/user.data.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text));

  usersInfo.push({ id, encryptedPassword });

  const stringfiedNewUsersInfo = JSON.stringify(usersInfo);

  const newUsersInfo = await fs.writeFile(
    "./src/data/user.data.json",
    stringfiedNewUsersInfo,
    {
      encoding: "utf-8",
    }
  );

  res.send("회원가입 되었습니다.");
};

const logIn = async (req: Request, res: Response) => {
  const { id, password } = req.body;

  const usersInfo = await fs
    .readFile("./src/data/user.data.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text));

  const loginUser = usersInfo.find((user: ) => user.id === id);

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
