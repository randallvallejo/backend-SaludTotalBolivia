import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Speciality } from 'src/entities/Speciality.entity';
import { Repository } from 'typeorm';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { DatabaseService } from 'src/database/database.service';
import { SearchSpecialtyById, SearchSpecialtyByName } from './dto/search-specialty-by';

@Injectable()
export class SpecialtiesService {
    constructor(
        @InjectRepository(Speciality)
        private readonly specialtyRepository: Repository<Speciality>,
        private readonly databaseService: DatabaseService
    ) {}
    async createSpecialty(createSpecialtyDto: CreateSpecialtyDto): Promise<{message: string, data: any}> {
        const specialty = this.databaseService.executeStoredProcedure('InsertSpecialty', [createSpecialtyDto.specialty.toLowerCase()]);
        if (!specialty) {
            return { message: 'Error creating specialty', data: null };
        }
        
        return specialty;
    }
    async getAllSpecialties() {
        const specialties = await this.specialtyRepository.find();
        return specialties;
    }
    async getSpecialtyById(searchSpecialtyById: SearchSpecialtyById) {
        const specialty = await this.specialtyRepository.findOne({ where: {specialityId: searchSpecialtyById.specialtyId } });
        return specialty;
    }
    async getSpecialtyByName(searchSpecialtyByName: SearchSpecialtyByName) {
        const specialty = await this.specialtyRepository.findOne({ where: {specialityName: searchSpecialtyByName.specialtyName.toLowerCase() } });
        return specialty;
    }
}
