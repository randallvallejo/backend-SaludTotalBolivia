import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class SearchDoctorByCiDto {
    @IsNotEmpty()
    @IsNumber()
    doctorCi: number;
}