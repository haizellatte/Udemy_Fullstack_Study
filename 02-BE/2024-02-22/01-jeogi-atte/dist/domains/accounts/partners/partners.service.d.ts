import { ConfigService } from '@nestjs/config';
import { Partner } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PartnersLogInDto, PartnersSignUpDto } from './partners.dto';
export declare class PartnersService {
    private readonly prismaService;
    private readonly configService;
    constructor(prismaService: PrismaService, configService: ConfigService);
    signUp({ email, password, businessName, phoneNmber, staffName, }: PartnersSignUpDto): Promise<string>;
    logIn({ email, password }: PartnersLogInDto): Promise<string>;
    generateAccessToken(partner: Pick<Partner, 'id' | 'email'>): string;
}
