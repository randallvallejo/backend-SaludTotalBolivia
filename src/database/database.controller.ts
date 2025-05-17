import { Controller, Get, Post, Param } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) {}
    @Get('patient/:patientCi')
    async getPatientDetails( @Param('patientCi') patientCi:string): Promise<any> {
        return this.databaseService.executeStoredProcedure('GetPatientDetails', [patientCi]);
    }
}
