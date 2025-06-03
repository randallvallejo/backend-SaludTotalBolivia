import { Injectable, Body } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Users } from '../entities/Users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUserByCiDto,SearchUserByEmailDto } from './dto/search-user-by.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
    constructor(private databaseService: DatabaseService,
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
        ) {}
    async createUser(createUserDto: CreateUserDto): Promise<{message: string, data: any}> {
        const userFound = await this.usersRepository.findOne({
            where: {
                userCi: createUserDto.userCi
            }
        });
        if (userFound) {
            throw new Error('User already exists');
        }
        console.log('Creating user with address:', createUserDto);
        const user = await this.databaseService.executeStoredProcedure<Users>('CreateUserWithAddress', [
            createUserDto.userCi,
            createUserDto.userEmail,
            createUserDto.userName,
            bcrypt.hashSync(createUserDto.userPassword,bcrypt.genSaltSync(10)),
            createUserDto.userPhone,
            createUserDto.name,
            createUserDto.lastName,
            createUserDto.birthDate,
            createUserDto.bloodType.toLowerCase(),
            createUserDto.departament.toLowerCase(),
            createUserDto.province.toLowerCase(),
            createUserDto.street.toLowerCase(),
        ]);
        user.message = 'User created successfully';
        return user;
    }
    async getAllUsers(): Promise<{message: string ,users:Users[]}> {
        const users = await this.usersRepository.find();
        return {
            message: 'Users found successfully',
            users: users
        };
    }
    async getUserByEmail(searchUserByEmailDto:SearchUserByEmailDto): Promise<{message: string ,user:Users}> {
        const user = await this.usersRepository.findOne({
            select: ['userCi','userEmail','userName','userPassword'],
            where: {
                userEmail: searchUserByEmailDto.userEmail
            }
        });
        if (!user) {
            throw new Error('User not found');
        }
        return {
            message: 'User found successfully',
            user: user
        };
    }
    async getUserByCi(searchUserByCiDto:SearchUserByCiDto): Promise<{message: string ,user:Users}> {
        const user = await this.usersRepository.findOne({
            select: ['userCi','userEmail','userName','userPassword'],
            where: {
                userCi: searchUserByCiDto.userCi
            }
        });
        if (!user) {
            throw new Error('User not found');
        }
        return {
            message: 'User found successfully',
            user: user
        };
    }
    async updateUser(updateUserDto: UpdateUserDto): Promise<{message: string, data: {originalData: Partial<Users>, updatedData: Partial<UpdateUserDto>}}> {
        const user = await this.usersRepository.findOne({
            where: {
                userCi: updateUserDto.userCi
            }
        });
        if (!user) {
            throw new Error('User not found');
        }
        const { userCi, ...updateData } = updateUserDto; // Exclude userCi from the update data
        await this.usersRepository.update(user.userUuid, updateData);
        const originalData = Object.keys(updateData).reduce((acc, key) => {
            if (updateData[key] !== undefined && updateData[key] !== user[key]) {
                acc[key] = user[key];
            }
            return acc;
        }, {} as Partial<Users>);
        const modifiedData = Object.keys(updateData).reduce((acc, key) => {
            if (updateData[key] !== undefined && updateData[key] !== user[key]) {
                acc[key] = updateData[key];
            }
            return acc;
        }, {} as Partial<UpdateUserDto>);
        return {
            message: 'User updated successfully',
            data: {
                originalData: originalData,
                updatedData: modifiedData
            }
        };
    }
    async getRolesbyCi(searchUserByCiDto: SearchUserByCiDto):Promise<string[]> {
        const rolesData = await this.databaseService.executeStoredProcedure<{data: string}[]>('GetUserRolesByCI', [ searchUserByCiDto.userCi ]);
        const roles = rolesData.map(role => {
            return role.roleName;
        });
        return roles;
    }
}
