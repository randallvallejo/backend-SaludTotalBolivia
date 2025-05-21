import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialists } from 'src/entities/Specialists.entity';
import { Repository } from 'typeorm';
import { AsignSpecialtyDto } from './dto/asign-specialty.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SpecialistsService {
    constructor(
        @InjectRepository(Specialists)
        private readonly specialistsRepository: Repository<Specialists>,
        private readonly databaseService: DatabaseService,
    ) {}
    async asignSpecialty(asignSpecialtyDto: AsignSpecialtyDto): Promise<{message: string, data:any}> {
        const executed = await this.databaseService.executeStoredProcedure<Specialists>('AssignSpecialtyWithExperience', [
            asignSpecialtyDto.doctorCi,
            asignSpecialtyDto.specialty,
            asignSpecialtyDto.yearsOfExperience ?? 0,
        ]);
        executed.message = 'Specialty assigned successfully';
        return executed;
    }
}
