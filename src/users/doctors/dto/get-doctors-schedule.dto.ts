import { IsNotEmpty, IsString,IsNumber } from 'class-validator';

export class GetDoctorsScheduleDto {
    @IsNotEmpty()
    @IsNumber()
    doctorCi: number;
    @IsNotEmpty()
    @IsString()
    institutionName: string;
    @IsNotEmpty()
    @IsString()
    department: string;
    @IsNotEmpty()
    @IsString()
    specialty: string;
}