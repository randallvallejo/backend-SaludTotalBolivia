import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto{
    @IsNotEmpty({message: 'Por favor ingresar el Ci'})
    @IsString({message: 'Se debe inngresar numeros'})
    userCi: number; 
}