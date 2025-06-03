import { Controller,Post,Get, Body,Patch , Param} from '@nestjs/common';
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
    @Get('search/email/:email')
    async getUserByEmail(@Param('email') email: string) {
        return this.usersService.getUserByEmail({userEmail: email});
    }
    @Get('search/ci/:ci')
    async getUserByCi(@Param('ci') ci: number) {
        return this.usersService.getUserByCi({userCi: ci});
    }
}
