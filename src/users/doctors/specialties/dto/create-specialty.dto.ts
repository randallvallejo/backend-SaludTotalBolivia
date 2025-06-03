import {IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateSpecialtyDto {
    @IsString()
    @IsNotEmpty()
    specialty: string;
}