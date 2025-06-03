import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class SearchUserByCiDto {
    @IsNumber()
    @IsNotEmpty()
    userCi: number;
}
export class SearchUserByEmailDto {
    @IsString()
    @IsNotEmpty()
    userEmail: string;
}