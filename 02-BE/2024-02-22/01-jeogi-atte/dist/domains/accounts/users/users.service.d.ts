import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UserLogInDto, UsersSignUpDto } from './user.dto';
export declare class UsersService {
    private readonly prismaService;
    private readonly configService;
    constructor(prismaService: PrismaService, configService: ConfigService);
    signUp({ email, password }: UsersSignUpDto): Promise<string>;
    logIn({ email, password }: UserLogInDto): Promise<string>;
    generateAccessToken(user: Pick<User, 'id' | 'email'>): string;
}
