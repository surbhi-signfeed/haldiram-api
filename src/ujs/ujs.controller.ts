import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Post,
  Req,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Param,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/admin/auth/jwt-auth.guard";
import { UjsService } from "./ujs.service";
import { Request } from "express";

import { UsersDTO } from "./dto/UJSUsersDTO";
import { StoreDTO } from "./dto/UJSStoreDTO";

@Controller("ujs")
export class UjsController {
  constructor(
    private readonly ujsService: UjsService,
    @Inject(Logger) private readonly logger: Logger
  ) { }
  // --------------------Department------------------------------------------
  // add department
  // @Post("AddDepartment")
  // @UseGuards(JwtAuthGuard)
  // async UJSDepartmentAdd(
  //   @Req() request: Request,
  //   @Body() ujsDepartmentDTO: UJSDepartmentDTO
  // ) {
  //   return this.ujsService.UJSDepartmentAdd(request, ujsDepartmentDTO);
  // }
  // // list department
  // @Get('ListDepartment')
  // @UseGuards(JwtAuthGuard)
  // async listDepartment(@Req() request: Request) {
  //   return this.ujsService.UJSDepartmentList(request);
  // }
  // // update department
  // @Post("UpdateDepartment")
  // @UseGuards(JwtAuthGuard)
  // async UJSDepartmentUpdate(
  //   @Req() request: Request,
  //   @Body() ujsDepartmentUpdateDTO: UJSDepartmentUpdateDTO
  // ) {
  //   return this.ujsService.UJSDepartmentUpdate(
  //     request,
  //     ujsDepartmentUpdateDTO
  //   );
  // }
  // // delete department
  // @Post("DeleteDepartment")
  // @UseGuards(JwtAuthGuard)
  // async UJSDepartmentDelete(
  //   @Req() request: Request,
  //   @Body() ujsDepartmentDeleteDTO: UJSDepartmentDeleteDTO
  // ) {
  //   return this.ujsService.UJSDepartmentDelete(
  //     request,
  //     ujsDepartmentDeleteDTO
  //   );
  // }
  // --------------------User-----------------------------
  // add User
  @Post("AddUsers")
  @UseGuards(JwtAuthGuard)
  async UserAdd(
    @Req() request: Request,
    @Body() UserDTO: UsersDTO
  ) {
    return this.ujsService.UserAdd(request, UserDTO);
  }
  // list User
  @Get('ListUser')
  @UseGuards(JwtAuthGuard)
  async liser(@Req() request: Request) {
    return this.ujsService.UserList(request);
  }
  // ---------------------store-------------------------
  // add Store
  @Post("AddStore")
  @UseGuards(JwtAuthGuard)
  async StoreAdd(
    @Req() request: Request,
    @Body() StoreDTO: StoreDTO
  ) {
    return this.ujsService.StoreAdd(request, StoreDTO);
  }
  // list Store
  @Get('ListStore')
  @UseGuards(JwtAuthGuard)
  async listStore(@Req() request: Request) {
    return this.ujsService.StoreList(request);
  }
  
  }
