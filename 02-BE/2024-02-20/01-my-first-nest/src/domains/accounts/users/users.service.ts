import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { isEmail } from 'validator';
import { UsersLogInDto, UsersSignUpDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async signUp(dto: UsersSignUpDto) {
    const { email, password } = dto;
    if (!email.trim()) throw new Error('no email');
    if (!isEmail(email)) throw new Error('올바른 이메일 X');
    if (!password.trim()) throw new Error('no password');
    if (password.length < 4) throw new Error('비번이 너무 짧음');

    const encryptedPassword = await hash(password, 12);

    const user = await this.prismaService.user.create({
      data: {
        email,
        encryptedPassword,
        profile: {
          create: {},
        },
        cart: {
          create: {},
        },
      },
    });

    const accessToken = this.generateAccessToken(user);

    return { accessToken: accessToken };
  }

  async logIn(dto: UsersLogInDto) {
    const { email, password } = dto;
    if (!email.trim()) throw new Error('no email');
    if (!isEmail(email)) throw new Error('올바른 이메일 X');
    if (!password.trim()) throw new Error('no password');
    if (password.length < 4) throw new Error('비번이 너무 짧음');

    const user = await this.prismaService.user.findUnique({
      where: { email: email },
    });
    if (!user) throw new Error('유저 없음');

    // 비번 확인
    try {
      await compare(password, user.encryptedPassword);
    } catch (e) {
      throw new Error('패스워드 틀림 ~~~~');
    }

    const accessToken = this.generateAccessToken(user);

    return { accessToken: accessToken };
  }

  async generateAccessToken(user: Pick<User, 'id' | 'email'>) {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    const accessToken = sign({ email: user.email }, JWT_SECRET_KEY, {
      subject: String(user.id),
      expiresIn: '5m',
    });

    return accessToken;
  }

  create() {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
