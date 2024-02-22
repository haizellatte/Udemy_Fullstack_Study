import { PartnersLogInDto, PartnersSignUpDto } from './partners.dto';
import { PartnersService } from './partners.service';
export declare class PartnersController {
    private readonly partnersService;
    constructor(partnersService: PartnersService);
    signUp(dto: PartnersSignUpDto): Promise<{
        accessToken: string;
    }>;
    logIn(dto: PartnersLogInDto): Promise<{
        accessToken: string;
    }>;
}
