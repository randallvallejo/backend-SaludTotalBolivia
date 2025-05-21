import {IsNotEmpty, IsNumber, IsString, IsDateString,IsOptional } from "class-validator";
export class CreateDoctorDto {
    @IsNotEmpty()
    @IsNumber()
    doctorCi: number;
    @IsOptional()
    @IsNumber()
    yearsOfExperience?: number;
    @IsOptional()
    @IsString()
    specialty?: string;
}