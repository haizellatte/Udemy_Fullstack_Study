import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersLogInDto, UsersSignUpDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('accounts/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('sign-up')
  async signUp(@Body() dto: UsersSignUpDto) {
    const result = await this.usersService.signUp(dto);
    return result;
  }

  @Post('log-in')
  async logIn(@Body() dto: UsersLogInDto) {
    const result = await this.usersService.logIn(dto);
    return result;
  }

  @Post()
  create() {
    return this.usersService.create();
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.usersService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
