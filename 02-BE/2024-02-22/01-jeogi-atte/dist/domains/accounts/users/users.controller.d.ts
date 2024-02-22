import { UserLogInDto, UsersSignUpDto } from './user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUp(dto: UsersSignUpDto): Promise<{
        accessToken: string;
    }>;
    logIn(dto: UserLogInDto): Promise<{
        accessToken: string;
    }>;
}
