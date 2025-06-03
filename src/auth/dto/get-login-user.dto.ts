import { IsEmail, IsNotEmpty, IsString,IsNumber } from 'class-validator';

export class GetLoginUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsNotEmpty()
    @IsNumber()
    ci: number;
}

