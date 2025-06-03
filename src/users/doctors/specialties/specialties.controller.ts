import { Controller, Get, Post, Body,Param } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { SearchSpecialtyById, SearchSpecialtyByName } from './dto/search-specialty-by';

@Controller('specialties')
export class SpecialtiesController {
    constructor(private readonly specialtiesService: SpecialtiesService) {}
    @Post()
    async createSpecialty(@Body() createSpecialtyDto: CreateSpecialtyDto) {
        return this.specialtiesService.createSpecialty(createSpecialtyDto);
    }
    @Get()
    async getAllSpecialties() {
        return this.specialtiesService.getAllSpecialties();
    }
    @Get('/id/:id')
    async getSpecialtyByIdParam(@Param('id') id: number) {
        const searchSpecialtyById = new SearchSpecialtyById();
        searchSpecialtyById.specialtyId = id;
        return this.specialtiesService.getSpecialtyById(searchSpecialtyById);
    }
    @Get('/name/:name')
    async getSpecialtyByNameParam(@Param('name') name: string) {
        const searchSpecialtyByName = new SearchSpecialtyByName();
        searchSpecialtyByName.specialtyName = name;
        return this.specialtiesService.getSpecialtyByName(searchSpecialtyByName);
    }
}
