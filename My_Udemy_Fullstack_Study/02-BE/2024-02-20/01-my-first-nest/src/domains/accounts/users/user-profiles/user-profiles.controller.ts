import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserProfilesService } from './user-profiles.service';

@Controller('user-profiles')
export class UserProfilesController {
  constructor(private readonly userProfilesService: UserProfilesService) {}

  @Post()
  create() {
    return this.userProfilesService.create();
  }

  @Get()
  findAll() {
    return this.userProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProfilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.userProfilesService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProfilesService.remove(+id);
  }
}
