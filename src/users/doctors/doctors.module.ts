import { Module } from '@nestjs/common';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctors } from 'src/entities/Doctors.entity';
import { DatabaseModule } from 'src/database/database.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { SpecialistsModule } from './specialists/specialists.module';
@Module({
  imports: [ TypeOrmModule.forFeature([Doctors]),DatabaseModule, SpecialtiesModule, SpecialistsModule],
  controllers: [DoctorsController],
  providers: [DoctorsService],
  exports: [DoctorsService],
})
export class DoctorsModule {}
