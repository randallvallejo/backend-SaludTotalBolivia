import {IsNotEmpty, IsOptional, IsString, IsNumber, IsNumberString } from "class-validator";

export class UpdateUserDto {
    @IsNumber()
    @IsNotEmpty()
    userCi: number;
    @IsNumberString()
    @IsOptional()
    phone?: string;
    @IsString()
    @IsOptional()
    userName?: string;
}