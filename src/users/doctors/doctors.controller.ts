import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto,CreateBaseDoctorDto } from './dto/create-doctor.dto';
import { SearchDoctorByCiDto } from './dto/search-doctor-by.dto';


@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {}

    @Post('register')
    async createDoctor(@Body() createDoctorDto: CreateDoctorDto) {
        return this.doctorsService.createDoctor(createDoctorDto);
    }
    @Get('search/ci')
    async getDoctorByCi(@Body() searchDoctorByCiDto: SearchDoctorByCiDto) {
        return this.doctorsService.getDoctorByCi(searchDoctorByCiDto);
    }
}
