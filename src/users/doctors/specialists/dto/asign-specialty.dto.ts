import { IsNotEmpty, IsString,IsNumber,IsOptional } from 'class-validator';

export class AsignSpecialtyDto {
    @IsNumber()
    @IsNotEmpty()
    doctorCi: number;
    @IsString()
    @IsNotEmpty()
    specialty: string;
    @IsOptional()
    @IsNumber()
    yearsOfExperience?: number;
}