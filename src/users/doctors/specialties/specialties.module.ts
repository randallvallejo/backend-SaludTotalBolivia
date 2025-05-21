import { Module } from '@nestjs/common';
import { SpecialtiesController } from './specialties.controller';
import { SpecialtiesService } from './specialties.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speciality } from 'src/entities/Speciality.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Speciality])
  , DatabaseModule],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService]
})
export class SpecialtiesModule {}
