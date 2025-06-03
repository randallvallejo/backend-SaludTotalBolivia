import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GetLoginUserDto } from './dto/get-login-user.dto';
import { UsersService } from 'src/users/users.service'
import { SearchUserByEmailDto } from 'src/users/dto/search-user-by.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService
    ) {}

    async login(getLoginUserDto: GetLoginUserDto): Promise<{message:string ,accessToken: string }>  {
        const searchUserByEmailDto: SearchUserByEmailDto = {
            userEmail: getLoginUserDto.email
        };
        const user = await this.usersService.getUserByEmail(searchUserByEmailDto);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        if( !bcrypt.compareSync(getLoginUserDto.password, user.user.userPassword)) {
            throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
        }
        const roles = await this.usersService.getRolesbyCi({
            userCi:getLoginUserDto.ci
        });
        const payload = { email: user.user.userEmail, ci: getLoginUserDto.ci,roles: roles };
        const accessToken = this.jwtService.sign(payload);
        return {
            message: 'Login successful',
            accessToken
        };
    }
}
