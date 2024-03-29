import { Module } from '@nestjs/common';
import { AccommodationsController } from './accommodations.controller';
import { AccommodationsService } from './accommodations.service';
import { RegionsModule } from './regions/regions.module';

@Module({
  controllers: [AccommodationsController],
  providers: [AccommodationsService],
  imports: [RegionsModule],
})
export class AccommodationsModule {}
