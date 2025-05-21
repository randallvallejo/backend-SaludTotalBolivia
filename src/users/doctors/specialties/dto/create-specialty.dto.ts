import {IsNotEmpty, IsString } from "class-validator";

export class CreateSpecialtyDto {
    @IsString()
    @IsNotEmpty()
    specialty: string;
}