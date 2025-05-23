import { Module } from '@nestjs/common';
import { HealthInstitucionService } from './health-institucion.service';
import { HealthInstitucionController } from './health-institucion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Healthcareinstitution } from 'src/entities/Healthcareinstitution.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Healthcareinstitution]),
    DatabaseModule
  ],
  providers: [HealthInstitucionService],
  controllers: [HealthInstitucionController]
})
export class HealthInstitucionModule {}
