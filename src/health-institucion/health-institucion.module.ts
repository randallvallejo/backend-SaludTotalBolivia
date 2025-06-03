import { Module } from '@nestjs/common';
import { HealthInstitucionService } from './health-institucion.service';
import { HealthInstitucionController } from './health-institucion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Healthcareinstitution } from 'src/entities/Healthcareinstitution.entity';
import { DatabaseModule } from 'src/database/database.module';
import { DoctorsModule } from 'src/users/doctors/doctors.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Healthcareinstitution]),
    DatabaseModule, DoctorsModule
  ],
  providers: [HealthInstitucionService],
  controllers: [HealthInstitucionController]
})
export class HealthInstitucionModule {}
