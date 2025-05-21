import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class SearchSpecialtyBy {
    @IsString()
    @IsNotEmpty()
    specialtyName: string;

    @IsNumber()
    @IsNotEmpty()
    specialtyId: number;
}
export class SearchSpecialtyByName {
    @IsString()
    @IsNotEmpty()
    specialtyName: string;
}
export class SearchSpecialtyById {
    @IsNumber()
    @IsNotEmpty()
    specialtyId: number;
}