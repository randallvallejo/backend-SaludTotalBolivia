import {IsNumber,IsEmail, IsNotEmpty, IsString,IsDateString } from 'class-validator';

export class CreateUserDto {
    @IsNumber()
    @IsNotEmpty()
    userCi: number;
    @IsEmail()
    @IsNotEmpty()
    userEmail: string;
    @IsString()
    @IsNotEmpty()
    userName: string;
    @IsString()
    @IsNotEmpty()
    userPassword: string;
    @IsString()
    @IsNotEmpty()
    userPhone: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    lastName: string;
    @IsDateString()
    @IsNotEmpty()
    birthDate: Date;
    @IsString()
    @IsNotEmpty()
    bloodType: string;
    @IsString()
    @IsNotEmpty()
    departament: string;
    @IsString()
    @IsNotEmpty()
    province: string;
    @IsString()
    @IsNotEmpty()
    street: string;
}