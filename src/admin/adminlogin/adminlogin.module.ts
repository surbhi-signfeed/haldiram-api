import { Logger, Module } from "@nestjs/common";
import { AdminloginController } from './adminlogin.controller';
import { AdminloginService } from './adminlogin.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminUserInfoEntity } from "./Entity/AdminUserInfoEntity";

@Module({
  imports: [TypeOrmModule.forFeature([ AdminUserInfoEntity
  ]),


],
  controllers: [AdminloginController],
  providers: [AdminloginService, Logger]
})
export class AdminloginModule {}
