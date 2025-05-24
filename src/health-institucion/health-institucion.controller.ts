import { Controller, Get, Post, Body } from '@nestjs/common';
import { HealthInstitucionService } from './health-institucion.service';
import { RegisterInstitucionDto } from './dto/register-institucion.dto';

@Controller('health-institucion')
export class HealthInstitucionController {
    constructor(private readonly healthInstitucionService: HealthInstitucionService) {}

    // Endpoint to register a new healthcare institution
    @Post('/register')
    async registerInstitucion(@Body() registerInstitucionDto: RegisterInstitucionDto) {
        return await this.healthInstitucionService.registerInstitucion(registerInstitucionDto);
    }

    @Get('')
    async getAllInstituciones() {
        return await this.healthInstitucionService.getAllInstituciones();
    }
}
