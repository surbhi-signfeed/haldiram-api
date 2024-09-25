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
  Query,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/admin/auth/jwt-auth.guard";

import { Request } from "express";
import { haldiramUsersDTO } from "./dto/haldiramUsersDTO";
import { haldiramStoreDTO } from "./dto/haldiramStoreDTO";
import { haldiramService } from "./haldiram.service";
import { haldiramProductDTO } from "./dto/haldiramProoductDTO";
;

@Controller("haldiram")
export class haldiramController {
  constructor(
    private readonly haldiramService: haldiramService,
    @Inject(Logger) private readonly logger: Logger
  ) { }
  // --------------------Department------------------------------------------
  // add department
  // @Post("AddDepartment")
  // @UseGuards(JwtAuthGuard)
  // async haldiramDepartmentAdd(
  //   @Req() request: Request,
  //   @Body() haldiramDepartmentDTO: haldiramDepartmentDTO
  // ) {
  //   return this.haldiramService.haldiramDepartmentAdd(request, haldiramDepartmentDTO);
  // }
  // // list department
  // @Get('ListDepartment')
  // @UseGuards(JwtAuthGuard)
  // async listDepartment(@Req() request: Request) {
  //   return this.haldiramService.haldiramDepartmentList(request);
  // }
  // // update department
  // @Post("UpdateDepartment")
  // @UseGuards(JwtAuthGuard)
  // async haldiramDepartmentUpdate(
  //   @Req() request: Request,
  //   @Body() haldiramDepartmentUpdateDTO: haldiramDepartmentUpdateDTO
  // ) {
  //   return this.haldiramService.haldiramDepartmentUpdate(
  //     request,
  //     haldiramDepartmentUpdateDTO
  //   );
  // }
  // // delete department
  // @Post("DeleteDepartment")
  // @UseGuards(JwtAuthGuard)
  // async haldiramDepartmentDelete(
  //   @Req() request: Request,
  //   @Body() haldiramDepartmentDeleteDTO: haldiramDepartmentDeleteDTO
  // ) {
  //   return this.haldiramService.haldiramDepartmentDelete(
  //     request,
  //     haldiramDepartmentDeleteDTO
  //   );
  // }
  // --------------------User-----------------------------
  // add User
  @Post("AddUsers")
  @UseGuards(JwtAuthGuard)
  async UserAdd(
    @Req() request: Request,
    @Body() UserDTO: haldiramUsersDTO
  ) {
    return this.haldiramService.UserAdd(request, UserDTO);
  }
  // list User
  @Get('ListUser')
  @UseGuards(JwtAuthGuard)
  async liser(@Req() request: Request) {
    return this.haldiramService.UserList(request);
  }
  // ---------------------store-------------------------
  // add Store
  @Post("AddStore")
  @UseGuards(JwtAuthGuard)
  async StoreAdd(
    @Req() request: Request,
    @Body() StoreDTO: haldiramStoreDTO
  ) {
    return this.haldiramService.StoreAdd(request, StoreDTO);
  }
  // list Store
  @Get('ListStore')
  @UseGuards(JwtAuthGuard)
  async listStore(@Req() request: Request) {
    return this.haldiramService.StoreList(request);
  }
  // ---------------------Product-------------------------
  // add Product
  @Post("AddProduct")
  @UseGuards(JwtAuthGuard)
  async ProductAdd(
    @Req() request: Request,
    @Body() ProductDTO: haldiramProductDTO
  ) {
    return this.haldiramService.ProductAdd(request, ProductDTO);
  }
  // list Product
  @Get('ListProduct')
  @UseGuards(JwtAuthGuard)
  async listProduct(@Req() request: Request) {
    return this.haldiramService.ProductList(request);
  }
  @Get('ListProductHistory/:user_id')
  @UseGuards(JwtAuthGuard)
  async ProductHistoryList(@Query('user_id') userId: number) {
    return this.haldiramService.ProductList(userId);
  }
  }
