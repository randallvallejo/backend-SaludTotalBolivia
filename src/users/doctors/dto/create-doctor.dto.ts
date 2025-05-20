import {IsNotEmpty, IsNumber, IsString, IsDateString } from "class-validator";
export class CreateDoctorDto {
    @IsNumber()
    @IsNotEmpty()
    doctorCi: number;
    @IsNumber()
    @IsNotEmpty()
    yearsOfExperience: number;
    @IsString()
    @IsNotEmpty()
    specialty: string;
}