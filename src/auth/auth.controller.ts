import { Controller,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SearchUserByEmailDto } from 'src/users/dto/search-user-by.dto';
import { GetLoginUserDto } from './dto/get-login-user.dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('login')
    async login(@Body() getLoginUserDto: GetLoginUserDto) {
        return this.authService.login(getLoginUserDto);
    }
}
