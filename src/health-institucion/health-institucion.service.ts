import { Injectable } from '@nestjs/common';
import {Healthcareinstitution } from 'src/entities/Healthcareinstitution.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterInstitucionDto } from './dto/register-institucion.dto';
import { DatabaseService } from 'src/database/database.service';
import { DoctorsService } from 'src/users/doctors/doctors.service';
import { SearchInstitucionByDepartmentDto, SearchSpecialtyByInstitutionDto, SearchDoctorBySpecialtyDepartmentDto } from './dto/search-institucion.dto';
import { GetDoctorsScheduleDto } from 'src/users/doctors/dto/get-doctors-schedule.dto';
@Injectable()
export class HealthInstitucionService {
    constructor(
        @InjectRepository(Healthcareinstitution)
        private readonly healthcareInstitutionRepository: Repository<Healthcareinstitution>,
        private readonly databaseService: DatabaseService,
        private readonly doctorsService: DoctorsService,
    ) {}
    
    async registerInstitucion(registerInstitucionDto: RegisterInstitucionDto): Promise<Healthcareinstitution> {
        const newInstitucion = this.healthcareInstitutionRepository.create(registerInstitucionDto);
        return await this.healthcareInstitutionRepository.save(newInstitucion);
    }
    
    async getAllInstituciones(): Promise<Healthcareinstitution[]> {
        return await this.healthcareInstitutionRepository.find();
    }
    async getInstitutionsByDepartament(searchInstitutionByDepartment:SearchInstitucionByDepartmentDto): Promise<any> {
        const institutions = await this.databaseService.executeStoredProcedure('GetInstitutionsByDepartment', [
            searchInstitutionByDepartment.departament.toLowerCase()
        ]);
        return {
            message: 'Institutions found successfully',
            institutions
        };
    }
    async getSpecialtiesByInstitution(institution:SearchSpecialtyByInstitutionDto): Promise<any> {
        const specialties = await this.databaseService.executeStoredProcedure('GetInstitutionSpecialtiesByDepartment', [
            institution.institutionName.toLowerCase(), institution.department.toLowerCase()]);
        return specialties;
    }
    async getDoctorsByInstitutionDepartment(institution:SearchDoctorBySpecialtyDepartmentDto): Promise<any> {
        const doctors = await this.databaseService.executeStoredProcedure('GetDoctorsByInstitutionSpecialtyAndDepartment', [
            institution.institutionName.toLowerCase(), institution.department.toLowerCase(), institution.specialty.toLowerCase()]);
        return doctors;
    }
    async getDoctorSchedule(doctorSchedule:GetDoctorsScheduleDto): Promise<any> {
        return this.doctorsService.getDoctorSchedule(doctorSchedule);
    }
}
