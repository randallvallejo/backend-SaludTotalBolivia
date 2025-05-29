import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/Users.entity';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientModule } from './patient/patient.module';
@Module({
  imports: [DatabaseModule,
    TypeOrmModule.forFeature([Users]),
    DoctorsModule,
    PatientModule
  ],
  controllers: [UsersController],
  providers: [UsersService, ],
  exports: [UsersService]
})
export class UsersModule {}
