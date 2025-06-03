import { IsNotEmpty, IsNumber, IsString, IsDateString } from "class-validator";

export class PatientInfoDto {
    @IsNotEmpty()
    @IsNumber()
    CI: number;
    @IsNotEmpty()
    @IsString()
    Nombre: string;
    @IsNotEmpty()
    @IsString()
    Apellido: string
    @IsNotEmpty()
    @IsString()
    Correo: string
    @IsNotEmpty()
    @IsString()
    Telefono: string
    @IsNotEmpty()
    @IsString()
    Departamento: string
    @IsNotEmpty()
    @IsString()
    Provincia: string
    @IsNotEmpty()
    @IsString()
    Calle: string
    @IsString()
    Detalles?: string;
    @IsNotEmpty()
    @IsString()
    Tipo_Sangre: string
}