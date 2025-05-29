import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from 'src/entities/Patients.entity';
import { Users } from 'src/entities/Users.entity';
import { DatabaseModule } from 'src/database/database.module';



@Module({
  imports: [DatabaseModule,TypeOrmModule.forFeature([Patients,Users])],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule {}
