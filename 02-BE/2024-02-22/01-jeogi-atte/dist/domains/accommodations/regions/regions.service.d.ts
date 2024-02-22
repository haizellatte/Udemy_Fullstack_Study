import { PrismaService } from 'src/database/prisma/prisma.service';
export declare class RegionsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getRegions(): Promise<{
        id: number;
        name: string;
        label: string;
        createAt: Date;
        updatedAt: Date;
    }[]>;
}
