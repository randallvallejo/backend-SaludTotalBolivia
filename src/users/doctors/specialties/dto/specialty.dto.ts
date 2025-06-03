import {IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class SpecialtyDto {
    @IsNotEmpty()
    @IsNumber()
    speacialtyId: number;
    @IsNotEmpty()
    @IsString()
    specialtyName: string;
}