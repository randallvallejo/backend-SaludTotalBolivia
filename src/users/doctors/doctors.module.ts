import { Module } from '@nestjs/common';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctors } from 'src/entities/Doctors.entity';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [ TypeOrmModule.forFeature([Doctors]),DatabaseModule],
  controllers: [DoctorsController],
  providers: [DoctorsService]
})
export class DoctorsModule {}
