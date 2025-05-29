import { Controller,Get,Post,Body } from '@nestjs/common';
import { PatientService } from './patient.service';
import { SearchUserByCiDto } from '../dto/search-user-by.dto';
import { Patients } from 'src/entities/Patients.entity';
@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}
    @Get()
    async getAllPatients(): Promise<{message: string, patients: Patients[]}> {
        return this.patientService.getAllPatients();
    }
    @Get('/details')
    async getPatientByCi(@Body() searchUserByCiDto: SearchUserByCiDto): Promise<{message: string, patient: any}> {
        return this.patientService.getPatientByCi(searchUserByCiDto);
    }
    @Get('/info')
    async getPatientInfoByCi(@Body() searchUserByCiDto: SearchUserByCiDto): Promise<{message: string, patientInfo: any}> {
        return this.patientService.getPatientInfoByCi(searchUserByCiDto);
    }
    @Get('/appointments')
    async getPatientAppointmentsByCi(@Body() searchUserByCiDto: SearchUserByCiDto): Promise<{message: string, appointments: any}> {
        return this.patientService.getPatientAppointmentsByCi(searchUserByCiDto);
    }
}
