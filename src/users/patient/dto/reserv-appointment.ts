import {IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class ReservAppointmentDto {
    @IsNotEmpty()
    @IsNumber()
    patientCi: string;
    @IsNotEmpty()
    @IsNumber()
    doctorCi: string;
    @IsNotEmpty()
    @IsString()
    specialty: string;
    @IsNotEmpty()
    @IsString()
    date: string;
    @IsNotEmpty()
    @IsString()
    institutionName: string;
    @IsNotEmpty()
    @IsString()
    department: string;
    @IsNotEmpty()
    @IsString()
    shift: string;
    @IsNotEmpty()
    @IsString()
    startTime: string;
}