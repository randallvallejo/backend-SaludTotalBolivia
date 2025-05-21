import { Module } from '@nestjs/common';
import { SpecialistsController } from './specialists.controller';
import { SpecialistsService } from './specialists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialists } from 'src/entities/Specialists.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [TypeOrmModule.forFeature([Specialists]), DatabaseModule],
  controllers: [SpecialistsController],
  providers: [SpecialistsService]
})
export class SpecialistsModule {
}
