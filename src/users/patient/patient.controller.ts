import { Controller,Get,Post,Body,Param } from '@nestjs/common';
import { PatientService } from './patient.service';
import { SearchUserByCiDto } from '../dto/search-user-by.dto';
import { Patients } from 'src/entities/Patients.entity';
import { ReservAppointmentDto } from './dto/reserv-appointment';
@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}
    @Get()
    async getAllPatients(): Promise<{message: string, patients: Patients[]}> {
        return this.patientService.getAllPatients();
    }
    @Get('/details/:ci')
    async getPatientByCi(@Param() ci:number ): Promise<any> {
        return this.patientService.getPatientByCi({ userCi: ci });
    }
    @Get('/info/:ci')
    async getPatientInfoByCi(@Param() ci:number): Promise<any> {
        return this.patientService.getPatientInfoByCi({ userCi: ci });
    }
    @Get('/appointments/:ci')
    async getPatientAppointmentsByCi(@Param() ci:number): Promise<any> {
        return this.patientService.getPatientAppointmentsByCi({ userCi: ci });
    }
    @Post('/reserv-appointment')
    async reservAppointment(@Body() appointmentData: ReservAppointmentDto): Promise<any> {
        console.log('Appointment Data:', appointmentData);
        return this.patientService.reservAppointment(appointmentData);
    }
}
