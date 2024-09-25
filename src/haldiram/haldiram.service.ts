import {
  Inject,
  Injectable,
  Logger,
} from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Connection } from "mysql2";
import { Repository } from "typeorm";
import { Express } from "express";
import { haldiramStoreEntity } from "./Entity/haldiramStoreEntity";
import { haldiramUsersEntity } from "./Entity/haldiramUsersEntity";
import { haldiramUsersDTO } from "./dto/haldiramUsersDTO";
import { haldiramStoreDTO } from "./dto/haldiramStoreDTO";
import { haldiramProductEntity } from "./Entity/haldiramProductEntity";
import { haldiramProductDTO } from "./dto/haldiramProoductDTO";


@Injectable()
export class haldiramService {
  private _logger: any;

  constructor(
    @Inject(Logger) private readonly logger: Logger,
    @InjectDataSource() private readonly connection: Connection,

    @InjectRepository(haldiramUsersEntity)
    private readonly UserRepository: Repository<haldiramUsersEntity>,
    @InjectRepository(haldiramStoreEntity)
    private readonly haldiramStoreRepository: Repository<haldiramStoreEntity>,
    @InjectRepository(haldiramProductEntity)
    private readonly haldiramProductRepository: Repository<haldiramProductEntity>
  ) {

  }

  // add user
  async UserAdd(request, UserDTO: haldiramUsersDTO) {
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
      const addUser: haldiramUsersEntity =
        new haldiramUsersEntity();
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
  async StoreAdd(request, StoreDTO: haldiramStoreDTO) {
    let checkStore =
      await this.haldiramStoreRepository.findOne({
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
      const addStore: haldiramStoreEntity =
        new haldiramStoreEntity();
      addStore.storename = StoreDTO.storename;
      addStore.address = StoreDTO.address;
      addStore.contact = StoreDTO.contact;
      addStore.gst_no = StoreDTO.gst_no;

      await this.haldiramStoreRepository.save(addStore);
      return { store: addStore, message: "success", status: 200 };
    }
  }
  // list store
  async StoreList(request) {
    let storeList = await this.haldiramStoreRepository.find(
      {}
    );
    return { store: storeList, message: "success", status: 200 };
  }
  // add store
  async ProductAdd(request, ProductDTO: haldiramProductDTO) {
    let checkProduct =
      await this.haldiramProductRepository.findOne({
        where: {
          product_name: ProductDTO.product_name

        },
      });
    if (checkProduct) {
      return {
        message: "Product Already Exist",
        status: 400,
      };
    } else {
      const addProduct: haldiramProductEntity =
        new haldiramProductEntity();
    
        addProduct.user_id = ProductDTO.user_id;
        addProduct.brand = ProductDTO.brand;
        addProduct.product_name = ProductDTO.product_name;
        addProduct.batch = ProductDTO.batch;
        addProduct.address = ProductDTO.address;
        addProduct.grossWT = ProductDTO.grossWT;
        addProduct.netWT = ProductDTO.netWT;
        addProduct.packing_date = ProductDTO.packing_date;
        addProduct.used_by = ProductDTO.used_by;
        
     

      await this.haldiramProductRepository.save(addProduct);
      return { product: addProduct, message: "success", status: 200 };
    }
  }
  // list product
  async ProductList(request) {
    let productList = await this.haldiramProductRepository.find(
      {}
    );
    return { product: productList, message: "success", status: 200 };
  }
  // list history
  async ProductHistoryList(request) {
    const userId = request.params.user_id; // Assuming user_id is passed as a URL parameter
  
    if (!userId) {
      return { message: "User ID is required", status: 400 };
    }
  
    try {
      // Filter records based on the user_id
      let productList = await this.haldiramProductRepository.find({
        where: { user_id: userId }
      });
  
      return { product: productList, message: "success", status: 200 };
    } catch (error) {
      return { message: "Error retrieving products", status: 500, error: error.message };
    }
  }
}

