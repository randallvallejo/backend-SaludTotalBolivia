import { IsNotEmpty, IsString } from 'class-validator';

export class SearchInstitucionByDepartmentDto {
    departament: string;
}

export class SearchSpecialtyByInstitutionDto {
    institutionName: string;
    department: string;
}

export class SearchDoctorBySpecialtyDepartmentDto {
    @IsNotEmpty()
    @IsString()
    specialty: string;
    @IsNotEmpty()
    @IsString()
    department: string;
    @IsNotEmpty()
    @IsString()
    institutionName:string;
}