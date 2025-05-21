import { Controller,Get,Post,Body } from '@nestjs/common';
import { SpecialistsService } from './specialists.service';
import { AsignSpecialtyDto } from './dto/asign-specialty.dto';

@Controller('specialists')
export class SpecialistsController {
    constructor(private readonly specialistsService: SpecialistsService) {}
    @Post('/asign')
    async asignSpecialty(@Body() asignSpecialtyDto: AsignSpecialtyDto) {
        return this.specialistsService.asignSpecialty(asignSpecialtyDto);
    }
}
