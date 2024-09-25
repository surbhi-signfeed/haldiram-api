import { Logger } from "@nestjs/common";
import { Connection } from "mysql2";
import { Repository } from "typeorm";
import { haldiramStoreEntity } from "./Entity/haldiramStoreEntity";
import { haldiramUsersEntity } from "./Entity/haldiramUsersEntity";
import { haldiramUsersDTO } from "./dto/haldiramUsersDTO";
import { haldiramStoreDTO } from "./dto/haldiramStoreDTO";
import { haldiramProductEntity } from "./Entity/haldiramProductEntity";
import { haldiramProductDTO } from "./dto/haldiramProoductDTO";
export declare class haldiramService {
    private readonly logger;
    private readonly connection;
    private readonly UserRepository;
    private readonly haldiramStoreRepository;
    private readonly haldiramProductRepository;
    private _logger;
    constructor(logger: Logger, connection: Connection, UserRepository: Repository<haldiramUsersEntity>, haldiramStoreRepository: Repository<haldiramStoreEntity>, haldiramProductRepository: Repository<haldiramProductEntity>);
    UserAdd(request: any, UserDTO: haldiramUsersDTO): Promise<{
        message: string;
        status: number;
        user?: undefined;
    } | {
        user: haldiramUsersEntity;
        message: string;
        status: number;
    }>;
    UserList(request: any): Promise<{
        user: haldiramUsersEntity[];
        message: string;
        status: number;
    }>;
    StoreAdd(request: any, StoreDTO: haldiramStoreDTO): Promise<{
        message: string;
        status: number;
        store?: undefined;
    } | {
        store: haldiramStoreEntity;
        message: string;
        status: number;
    }>;
    StoreList(request: any): Promise<{
        store: haldiramStoreEntity[];
        message: string;
        status: number;
    }>;
    ProductAdd(request: any, ProductDTO: haldiramProductDTO): Promise<{
        message: string;
        status: number;
        product?: undefined;
    } | {
        product: haldiramProductEntity;
        message: string;
        status: number;
    }>;
    ProductList(request: any): Promise<{
        product: haldiramProductEntity[];
        message: string;
        status: number;
    }>;
    ProductHistoryList(request: any): Promise<{
        message: string;
        status: number;
        product?: undefined;
        error?: undefined;
    } | {
        product: haldiramProductEntity[];
        message: string;
        status: number;
        error?: undefined;
    } | {
        message: string;
        status: number;
        error: any;
        product?: undefined;
    }>;
}
