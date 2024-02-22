import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import prismaClient from "../../prisma/client.prisma";

//? res: Response<Omit<User, "encryptedPassword" | "id">> // 👉 omit을 여러개 하려면 '|'를 사용하면 된다.
//! 서버에서 에러가 뜨면(400, 404 등) 서버가 꺼짐 --> 이때 next()를 사용하면 서버가 꺼지지 않고 다음 요청으로 넘어가게 된다.

class UserService {
  async createUser(
    req: Request<
      never,
      unknown,
      {
        email: string;
        password: string;
        nickname: string;
        name: string;
        gender: string;
        age: number;
      }
    >,
    res: Response<Omit<User, "encryptedPassword">>,
    next: NextFunction
  ) {
    try {
      const { email, password, nickname, name, gender, age } = req.body;
      if (!email.trim()) throw new Error("No email");
      if (!password.trim()) throw new Error("No password");

      const encryptedPassword = await hash(password, 12);
      const user = await prismaClient.user.create({
        data: {
          email,
          encryptedPassword,
          profile: { create: { nickname, name, gender, age } },
        },
        select: { id: true, email: true, createdAt: true, profile: true },
      });

      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async getUsers(_: Request, res: Response) {
    const users = await prismaClient.user.findMany();
    res.json(users);
  }

  async getUser(req: Request<{ userId: string }>, res: Response) {
    const parsedUserId = Number(req.params.userId);
    if (isNaN(parsedUserId)) throw new Error("error");

    const user = await prismaClient.user.findUnique({
      where: { id: parsedUserId },
      select: {
        id: true,
        email: true,
        createdAt: true,
        profile: true,
      },
      include: {
        //! SQL의 JOIN 역할 👉 만약 특정 cols만 가져오고 싶다면 안에 객체를 넣으면 됨
        profile: true,
      },
    });

    res.json(user);
  }

  async updateUser(
    req: Request<
      { userId: string },
      Omit<User, "encryptedPassword">,
      { email: string }
    >,
    res: Response
  ) {
    const parsedUserId = Number(req.params.userId);
    if (isNaN(parsedUserId)) throw new Error("error");

    const { email } = req.body;

    const user = await prismaClient.user.update({
      where: { id: parsedUserId },
      data: { email },
      select: { id: true, email: true, createdAt: true }, //! 특정 cols만 가져올 것
    });

    if (!user) throw new Error("유저 없음");

    res.json(user);
  }

  async deleteUser(req: Request<{ userId: string }>, res: Response) {
    const parsedUserId = Number(req.params.userId);
    if (isNaN(parsedUserId)) throw new Error("error");

    const user = await prismaClient.user.delete({
      where: { id: parsedUserId },
    });

    res.json(user);
  }
}

const usersService = new UserService();

export default usersService;
