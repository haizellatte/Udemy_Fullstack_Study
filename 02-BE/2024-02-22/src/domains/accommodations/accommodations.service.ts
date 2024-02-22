import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AccommodationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createAccommodation(data: Prisma.AccommodationUncheckedCreateInput) {
    const accommodation = this.prismaService.accommodation.create({ data });
    return accommodation;
  }

  getAccommodations() {
    const accommodation = this.prismaService.accommodation.findMany();
    return accommodation;
  }

  getAccommodation(accommodationId: number) {
    const accommodation = this.prismaService.accommodation.findUnique({
      where: { id: accommodationId },
    });
    return accommodation;
  }
}
