import { Injectable, Body } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Users } from '../entities/Users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
    constructor(private databaseService: DatabaseService,
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
        ) {}
    async createUser(createUserDto: CreateUserDto): Promise<any> {
        const userFound = await this.usersRepository.findOne({
            where: {
                userCi: createUserDto.userCi
            }
        });
        if (userFound) {
            throw new Error('User already exists');
        }
        const user = await this.databaseService.executeStoredProcedure<Users>('CreateUserWithAddress', [
            createUserDto.userCi,
            createUserDto.userEmail,
            createUserDto.userName,
            createUserDto.userPassword,
            createUserDto.userPhone,
            createUserDto.name,
            createUserDto.lastName,
            createUserDto.birthDate,
            createUserDto.bloodType,
            createUserDto.departament,
            createUserDto.province,
            createUserDto.street
        ]);
        user.message = 'User created successfully';
        return user;
    }
}
