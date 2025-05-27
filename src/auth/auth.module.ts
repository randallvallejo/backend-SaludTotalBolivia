import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import config from 'src/config/configuration'
@Module({
  imports:[UsersModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: config().jwt.secret,
        signOptions: config().jwt.signOptions
      })
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
