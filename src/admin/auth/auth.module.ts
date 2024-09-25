import {Logger, Module} from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AdminUserInfoEntity} from "../adminlogin/Entity/AdminUserInfoEntity";
import { JwtStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConfig } from './jwt.config';


@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register(jwtConfig),
        TypeOrmModule.forFeature([ AdminUserInfoEntity
        ])
    ],
    controllers: [AuthController],
    providers: [AuthService, Logger, JwtStrategy],
    exports: [PassportModule, JwtModule],
})

export class AuthModule {}
