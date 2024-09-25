import {
  Inject,
  Injectable,
  Logger,
} from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Connection } from "mysql2";
import { Repository } from "typeorm";
import { Express } from "express";

import { UsersDTO } from "./dto/UJSUsersDTO";
import { UsersEntity } from "./Entity/UJSUsersEntity";
import { UJSStoreEntity } from "./Entity/UJSStoreEntity";
import { StoreDTO } from "./dto/UJSStoreDTO";
@Injectable()
export class UjsService {
  private _logger: any;

  constructor(
    @Inject(Logger) private readonly logger: Logger,
    @InjectDataSource() private readonly connection: Connection,

    @InjectRepository(UsersEntity)
    private readonly UserRepository: Repository<UsersEntity>,
    @InjectRepository(UJSStoreEntity)
    private readonly UJSStoreRepository: Repository<UJSStoreEntity>,

  ) {

  }

  // add user
  async UserAdd(request, UserDTO: UsersDTO) {
    let checkUser =
      await this.UserRepository.findOne({
        where: {
          email: UserDTO.email

        },
      });
    if (checkUser) {
      return {
        message: "email Already Exist",
        status: 400,
      };
    } else {
      const addUser: UsersEntity =
        new UsersEntity();
      addUser.name = UserDTO.name;
      addUser.email = UserDTO.email;
      addUser.password = UserDTO.password;
      addUser.phone = UserDTO.phone;
      addUser.address = UserDTO.address;
      addUser.store_id = UserDTO.store_id;
      addUser.status = true;


      await this.UserRepository.save(addUser);
      return { user: addUser, message: "success", status: 200 };
    }
  }
  // list store
  async UserList(request) {
    let userList = await this.UserRepository.find(
      {}
    );
    return { user: userList, message: "success", status: 200 };
  }
  // add store
  async StoreAdd(request, StoreDTO: StoreDTO) {
    let checkStore =
      await this.UJSStoreRepository.findOne({
        where: {
          storename: StoreDTO.storename

        },
      });
    if (checkStore) {
      return {
        message: "Store Already Exist",
        status: 400,
      };
    } else {
      const addStore: UJSStoreEntity =
        new UJSStoreEntity();
      addStore.storename = StoreDTO.storename;
      addStore.address = StoreDTO.address;
      addStore.contact = StoreDTO.contact;
      addStore.gst_no = StoreDTO.gst_no;

      await this.UJSStoreRepository.save(addStore);
      return { store: addStore, message: "success", status: 200 };
    }
  }
  // list store
  async StoreList(request) {
    let storeList = await this.UJSStoreRepository.find(
      {}
    );
    return { store: storeList, message: "success", status: 200 };
  }
}

