import { Body, Controller, Get, Inject, Logger, Post, Query, Req,ParseIntPipe,Param } from "@nestjs/common";
import { AdminloginService } from "./adminlogin.service";
import { AdminUserLoginDTO } from "./dto/AdminUserLoginDTO";
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('admin')
export class AdminloginController {
    constructor(private readonly adminloginservice: AdminloginService, @Inject(Logger) private readonly logger: Logger)
{}



 


 
}
