import { Injectable,Body } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Doctors } from 'src/entities/Doctors.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { SearchDoctorByCiDto } from './dto/search-doctor-by.dto';

@Injectable()
export class DoctorsService {
    constructor(
        @InjectRepository(Doctors)
        private readonly doctorsRepository: Repository<Doctors>,
        private readonly databaseService: DatabaseService,
    ) {}
    async createDoctor(createDoctorDto: CreateDoctorDto): Promise<{message: string, data:any}> {
        const executed = await this.databaseService.executeStoredProcedure<Doctors>('ConvertUserToDoctorWithSpecialty', [
            createDoctorDto.doctorCi,
            createDoctorDto.yearsOfExperience ?? 0,
            createDoctorDto.specialty ?? 'Medicina general'
        ]);
        executed.message = 'Doctor created successfully';
        return executed;
    }
    async getDoctorByCi(searchDoctor: SearchDoctorByCiDto): Promise<{message: string, data:any}> {
        const executed = await this.databaseService.executeStoredProcedure<Doctors>('GetDoctorByCi', [
            searchDoctor.doctorCi
        ]);
        executed.message = 'Doctor found successfully';
        return executed;
    }
}
