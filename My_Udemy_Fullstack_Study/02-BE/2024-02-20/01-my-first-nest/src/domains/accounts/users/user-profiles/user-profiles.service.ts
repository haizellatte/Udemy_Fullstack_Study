import { Injectable } from '@nestjs/common';

@Injectable()
export class UserProfilesService {
  create() {
    return 'This action adds a new userProfile';
  }

  findAll() {
    return `This action returns all userProfiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userProfile`;
  }

  update(id: number) {
    return `This action updates a #${id} userProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} userProfile`;
  }
}
