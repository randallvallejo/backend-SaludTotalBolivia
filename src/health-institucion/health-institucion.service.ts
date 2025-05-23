import { Injectable } from '@nestjs/common';
import {Healthcareinstitution } from 'src/entities/Healthcareinstitution.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterInstitucionDto } from './dto/register-institucion.dto';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class HealthInstitucionService {
    constructor(
        @InjectRepository(Healthcareinstitution)
        private readonly healthcareInstitutionRepository: Repository<Healthcareinstitution>,
        private readonly databaseService: DatabaseService,
    ) {}
    
    async registerInstitucion(registerInstitucionDto: RegisterInstitucionDto): Promise<Healthcareinstitution> {
        const newInstitucion = this.healthcareInstitutionRepository.create(registerInstitucionDto);
        return await this.healthcareInstitutionRepository.save(newInstitucion);
    }
    
    async getAllInstituciones(): Promise<Healthcareinstitution[]> {
        return await this.healthcareInstitutionRepository.find();
    }
}
