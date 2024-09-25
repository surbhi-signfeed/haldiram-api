import {Logger, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {join} from "path";
import {ScheduleModule} from "@nestjs/schedule";
import {ConfigModule} from "@nestjs/config";
import {ServeStaticModule} from "@nestjs/serve-static";
import {LoggingInterceptor} from "./LoggingInterceptor";
import {APP_INTERCEPTOR} from "@nestjs/core";
import { CmsModule } from './haldiram/haldiram.module';
import { AuthModule } from './admin/auth/auth.module';
import { AdminloginModule } from './admin/adminlogin/adminlogin.module';


@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
            exclude: ['/api/(.*)'],
        }),
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '1234',
                database: 'haldiram',
                entities: [join(__dirname, '**', '*Entity.{ts,js}')],
                synchronize: false,
                logging: true,
                migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
                migrationsRun: true
            })
        }),


       
        ScheduleModule.forRoot(),
        CmsModule,
        AuthModule,
        AdminloginModule,

    ],
    controllers: [AppController,],
    providers: [AppService, Logger, {
        provide: APP_INTERCEPTOR,
        useClass: LoggingInterceptor,
    } ],
})
export class AppModule {
}
