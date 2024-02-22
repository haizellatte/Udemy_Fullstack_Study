import { Partner } from '@prisma/client';
import { AccommodationsResisterDto } from './accommodations.dto';
import { AccommodationsService } from './accommodations.service';
export declare class AccommodationsController {
    private readonly accommodationsService;
    constructor(accommodationsService: AccommodationsService);
    resisterAccommodation(partner: Partner, dto: AccommodationsResisterDto): Promise<{
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
    getAccommodations(): import(".prisma/client").Prisma.PrismaPromise<{
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
    getAccommodation(accommodationId: number): import(".prisma/client").Prisma.Prisma__AccommodationClient<{
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
