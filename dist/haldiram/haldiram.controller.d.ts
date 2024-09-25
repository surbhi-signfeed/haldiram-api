import { Logger } from "@nestjs/common";
import { Request } from "express";
import { haldiramUsersDTO } from "./dto/haldiramUsersDTO";
import { haldiramStoreDTO } from "./dto/haldiramStoreDTO";
import { haldiramService } from "./haldiram.service";
import { haldiramProductDTO } from "./dto/haldiramProoductDTO";
export declare class haldiramController {
    private readonly haldiramService;
    private readonly logger;
    constructor(haldiramService: haldiramService, logger: Logger);
    UserAdd(request: Request, UserDTO: haldiramUsersDTO): Promise<{
        message: string;
        status: number;
        user?: undefined;
    } | {
        user: import("./Entity/haldiramUsersEntity").haldiramUsersEntity;
        message: string;
        status: number;
    }>;
    liser(request: Request): Promise<{
        user: import("./Entity/haldiramUsersEntity").haldiramUsersEntity[];
        message: string;
        status: number;
    }>;
    StoreAdd(request: Request, StoreDTO: haldiramStoreDTO): Promise<{
        message: string;
        status: number;
        store?: undefined;
    } | {
        store: import("./Entity/haldiramStoreEntity").haldiramStoreEntity;
        message: string;
        status: number;
    }>;
    listStore(request: Request): Promise<{
        store: import("./Entity/haldiramStoreEntity").haldiramStoreEntity[];
        message: string;
        status: number;
    }>;
    ProductAdd(request: Request, ProductDTO: haldiramProductDTO): Promise<{
        message: string;
        status: number;
        product?: undefined;
    } | {
        product: import("./Entity/haldiramProductEntity").haldiramProductEntity;
        message: string;
        status: number;
    }>;
    listProduct(request: Request): Promise<{
        product: import("./Entity/haldiramProductEntity").haldiramProductEntity[];
        message: string;
        status: number;
    }>;
    ProductHistoryList(userId: number): Promise<{
        product: import("./Entity/haldiramProductEntity").haldiramProductEntity[];
        message: string;
        status: number;
    }>;
}
