import { Body, Controller, Post } from '@nestjs/common';
import { UserLogInDto, UsersSignUpDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('accounts/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('sign-up')
  async signUp(@Body() dto: UsersSignUpDto) {
    const accessToken = await this.usersService.signUp(dto);

    return { accessToken };
  }

  @Post('log-in')
  async logIn(@Body() dto: UserLogInDto) {
    const accessToken = await this.usersService.logIn(dto);

    return { accessToken };
  }
}
