"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const ko_1 = require("@faker-js/faker/locale/ko");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const nanoid_1 = require("nanoid");
const prisma_service_1 = require("../../../database/prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prismaService, configService) {
        this.prismaService = prismaService;
        this.configService = configService;
    }
    async signUp({ email, password }) {
        const sinUpData = {
            id: (0, nanoid_1.nanoid)(),
            email: email,
            encryptedPassword: await (0, bcrypt_1.hash)(password, 15),
            profile: {
                create: {
                    nickname: ko_1.faker.music.songName(),
                },
            },
        };
        const user = await this.prismaService.user.create({
            data: sinUpData,
            select: { id: true, email: true },
        });
        const accessToken = this.generateAccessToken(user);
        return accessToken;
    }
    async logIn({ email, password }) {
        if (!email.trim())
            throw new common_1.BadRequestException('No email');
        if (!password.trim())
            throw new common_1.BadRequestException('No password');
        const user = await this.prismaService.user.findUnique({
            where: { email },
            select: { id: true, email: true, encryptedPassword: true },
        });
        if (!user)
            throw new common_1.NotFoundException('No user Found');
        const isCorrectPassword = await (0, bcrypt_1.compare)(password, user.encryptedPassword);
        if (!isCorrectPassword)
            throw new common_1.BadRequestException('Invalid password');
        const accessToken = this.generateAccessToken(user);
        return accessToken;
    }
    generateAccessToken(user) {
        const { id: subject, email } = user;
        const secretKey = this.configService.getOrThrow('JWT_SECRET_KEY');
        const accessToken = (0, jsonwebtoken_1.sign)({ email, accountType: 'user' }, secretKey, {
            subject,
            expiresIn: '5d',
        });
        return accessToken;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], UsersService);
//# sourceMappingURL=users.service.js.map