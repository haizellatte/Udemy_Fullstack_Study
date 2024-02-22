import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { verify } from 'jsonwebtoken';
import { ParsedQs } from 'qs';
import { PrismaService } from 'src/db/prisma/prisma.service';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
if (!JWT_SECRET_KEY) throw new Error('NO JWT_SECRET_KEY!');

//* AuthMiddleware :  인증 관련된 처리를 하는 미들웨어 (토큰 검사)
@Injectable()
export class AuthMiddleware implements NestMiddleware<Request, Response> {
  constructor(private readonly prismaService: PrismaService) {}

  async use(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    _: Response<any, Record<string, any>>,
    next: (error?: any) => void,
  ) {
    req.user = null;

    const accessToken = req.headers.authorization?.split('Bearer ')[1];

    if (!accessToken) return next();

    let id: number;

    try {
      const { sub } = verify(accessToken, process.env.JWT_SECRET_KEY);
      id = Number(sub);
    } catch {
      throw new UnauthorizedException('Invalid AccessToken!');
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: id },
    });

    if (!user)
      throw new BadRequestException('No User! This User Might be deleted.');
    req.user = user;

    console.log(`AuthMiddleware 잘 돌아갑니데이 ~`);
    next();
  }
}

//* 수도 코드
//? 1. 토큰 있는지 확인
//? 1-1.요청 헤더의 authorization에 있는 JWT Token을 꺼내온다.
//? 1-2. 토큰 없다면 일단 통과 (아무것도 안해줌)
//? 1-3. 토큰이 있다면 토큰이 유효한지 확인
//? 2-1. 유효하지 않음 -> 돌아가(에러발생)
//? 3. 토큰 유효함 --> 유저 가져옴
//? 3-1. 유저 없음 --> 에러 발생 (삭제된 유저 가능성)
//? 4. 유저 있음
