import { Controller,Post,Get, Body,Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Post('register')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    @Get('')
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }
    @Patch('update')
    async updateUser(@Body() updateUserDto: any) {
        return this.usersService.updateUser(updateUserDto);
    }
    @Get('search/email')
    async getUserByEmail(@Body() searchUserByEmailDto: any) {
        return this.usersService.getUserByEmail(searchUserByEmailDto);
    }
    @Get('search/ci')
    async getUserByCi(@Body() searchUserByCiDto: any) {
        return this.usersService.getUserByCi(searchUserByCiDto);
    }
}
