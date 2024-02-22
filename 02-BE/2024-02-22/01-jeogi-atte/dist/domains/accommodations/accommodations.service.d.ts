import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
export declare class AccommodationsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createAccommodation(data: Prisma.AccommodationUncheckedCreateInput): Promise<{
        id: number;
        partnerId: string;
        name: string;
        description: string;
        type: import(".prisma/client").$Enums.AccommodationType;
        address1: string;
        address2: string;
        latitude: number;
        longitude: number;
        imgUrl: string;
        createAt: Date;
        updatedAt: Date;
    }>;
    getAccommodations(): Prisma.PrismaPromise<{
        id: number;
        partnerId: string;
        name: string;
        description: string;
        type: import(".prisma/client").$Enums.AccommodationType;
        address1: string;
        address2: string;
        latitude: number;
        longitude: number;
        imgUrl: string;
        createAt: Date;
        updatedAt: Date;
    }[]>;
    getAccommodation(accommodationId: number): Prisma.Prisma__AccommodationClient<{
        id: number;
        partnerId: string;
        name: string;
        description: string;
        type: import(".prisma/client").$Enums.AccommodationType;
        address1: string;
        address2: string;
        latitude: number;
        longitude: number;
        imgUrl: string;
        createAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
