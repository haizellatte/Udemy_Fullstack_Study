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
exports.PartnersService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const nanoid_1 = require("nanoid");
const prisma_service_1 = require("../../../database/prisma/prisma.service");
let PartnersService = class PartnersService {
    constructor(prismaService, configService) {
        this.prismaService = prismaService;
        this.configService = configService;
    }
    async signUp({ email, password, businessName, phoneNmber, staffName, }) {
        const sinUpData = {
            id: (0, nanoid_1.nanoid)(),
            email: email,
            encryptedPassword: await (0, bcrypt_1.hash)(password, 15),
            businessName: businessName,
            phoneNmber: phoneNmber,
            staffName: staffName,
        };
        const partner = await this.prismaService.partner.create({
            data: sinUpData,
            select: { id: true, email: true, businessName: true },
        });
        const accessToken = this.generateAccessToken(partner);
        return accessToken;
    }
    async logIn({ email, password }) {
        if (!email.trim())
            throw new common_1.BadRequestException('No email');
        if (!password.trim())
            throw new common_1.BadRequestException('No password');
        const partner = await this.prismaService.partner.findUnique({
            where: { email },
            select: { id: true, email: true, encryptedPassword: true },
        });
        if (!partner)
            throw new common_1.NotFoundException('No partner Found');
        const isCorrectPassword = await (0, bcrypt_1.compare)(password, partner.encryptedPassword);
        if (!isCorrectPassword)
            throw new common_1.BadRequestException('Invalid password');
        const accessToken = this.generateAccessToken(partner);
        return accessToken;
    }
    generateAccessToken(partner) {
        const { id: subject, email } = partner;
        const secretKey = this.configService.getOrThrow('JWT_SECRET_KEY');
        const accessToken = (0, jsonwebtoken_1.sign)({ email, accountType: 'partner' }, secretKey, {
            subject,
            expiresIn: '5d',
        });
        return accessToken;
    }
};
exports.PartnersService = PartnersService;
exports.PartnersService = PartnersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], PartnersService);
//# sourceMappingURL=partners.service.js.map