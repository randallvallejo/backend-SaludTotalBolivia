import { Controller, Get, Post, Body,Param } from '@nestjs/common';
import { HealthInstitucionService } from './health-institucion.service';
import { RegisterInstitucionDto } from './dto/register-institucion.dto';
import { SearchInstitucionByDepartmentDto, SearchSpecialtyByInstitutionDto
, SearchDoctorBySpecialtyDepartmentDto
    } from './dto/search-institucion.dto';
import { get } from 'http';
import { GetDoctorsScheduleDto } from 'src/users/doctors/dto/get-doctors-schedule.dto';

@Controller('health-institucion')
export class HealthInstitucionController {
    constructor(private readonly healthInstitucionService: HealthInstitucionService) {}

    // Endpoint to register a new healthcare institution
    @Post('/register')
    async registerInstitucion(@Body() registerInstitucionDto: RegisterInstitucionDto) {
        return await this.healthInstitucionService.registerInstitucion(registerInstitucionDto);
    }

    @Get('')
    async getAllInstituciones() {
        return await this.healthInstitucionService.getAllInstituciones();
    }
    @Get('/test')
    async test() {
        return {
            institutionName: 'Test Institution',
            institutionAddress: '123 Main St',
            institutionPhone: '555-1234',
            fundationDate: new Date()
        }
    }
    @Get('department/:departament')
    async getInstitutionsByDepartament(
        @Param('departament') departament: string): Promise<any> {
        const searchInstitutionByDepartment: SearchInstitucionByDepartmentDto = {
            departament: departament
        };
        return await this.healthInstitucionService.getInstitutionsByDepartament(searchInstitutionByDepartment);
    }
    @Get('specialties/:institutionName/:department')
    async getSpecialtiesByInstitution(
        @Param('institutionName') institutionName: string,
        @Param('department') department: string): Promise<any> {
        const searchSpecialtyByInstitution: SearchSpecialtyByInstitutionDto = {
            institutionName: institutionName,
            department: department
        };
        return await this.healthInstitucionService.getSpecialtiesByInstitution(searchSpecialtyByInstitution);
    }
    @Get('doctors/:institutionName/:department/:specialty')
    async getDoctorsByInstitutionDepartment(
        @Param('institutionName') institutionName: string,
        @Param('department') department: string,
        @Param('specialty') specialty: string): Promise<any> {
        const searchDoctorBySpecialtyDepartment: SearchDoctorBySpecialtyDepartmentDto = {
            institutionName: institutionName,
            department: department,
            specialty: specialty
        };
        return await this.healthInstitucionService.getDoctorsByInstitutionDepartment(searchDoctorBySpecialtyDepartment);
    }
    @Get('doctor/schedules/:doctorCi/:institutionName/:department/:specialty')
    async getDoctorSchedule(
        @Param('doctorCi') doctorCi: number,
        @Param('institutionName') institutionName: string,
        @Param('department') department: string,
        @Param('specialty') specialty: string): Promise<any> {
        const getDoctorSchedule: GetDoctorsScheduleDto = {
            doctorCi: doctorCi,
            institutionName: institutionName,
            department: department,
            specialty: specialty
        };
        return await this.healthInstitucionService.getDoctorSchedule(getDoctorSchedule);
    }
}
