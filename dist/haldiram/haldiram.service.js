"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.haldiramService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const haldiramStoreEntity_1 = require("./Entity/haldiramStoreEntity");
const haldiramUsersEntity_1 = require("./Entity/haldiramUsersEntity");
const haldiramProductEntity_1 = require("./Entity/haldiramProductEntity");
let haldiramService = class haldiramService {
    constructor(logger, connection, UserRepository, haldiramStoreRepository, haldiramProductRepository) {
        this.logger = logger;
        this.connection = connection;
        this.UserRepository = UserRepository;
        this.haldiramStoreRepository = haldiramStoreRepository;
        this.haldiramProductRepository = haldiramProductRepository;
    }
    async UserAdd(request, UserDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkUser = await this.UserRepository.findOne({
            where: {
                email: UserDTO.email
            },
        });
        if (checkUser) {
            return {
                message: "email Already Exist",
                status: 400,
            };
        }
        else {
            const addUser = new haldiramUsersEntity_1.haldiramUsersEntity();
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
    async UserList(request) {
        let userList = await this.UserRepository.find({});
        return { user: userList, message: "success", status: 200 };
    }
    async StoreAdd(request, StoreDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkStore = await this.haldiramStoreRepository.findOne({
            where: {
                storename: StoreDTO.storename
            },
        });
        if (checkStore) {
            return {
                message: "Store Already Exist",
                status: 400,
            };
        }
        else {
            const addStore = new haldiramStoreEntity_1.haldiramStoreEntity();
            addStore.storename = StoreDTO.storename;
            addStore.address = StoreDTO.address;
            addStore.contact = StoreDTO.contact;
            addStore.gst_no = StoreDTO.gst_no;
            await this.haldiramStoreRepository.save(addStore);
            return { store: addStore, message: "success", status: 200 };
        }
    }
    async StoreList(request) {
        let storeList = await this.haldiramStoreRepository.find({});
        return { store: storeList, message: "success", status: 200 };
    }
    async ProductAdd(request, ProductDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkProduct = await this.haldiramProductRepository.findOne({
            where: {
                product_name: ProductDTO.product_name
            },
        });
        if (checkProduct) {
            return {
                message: "Product Already Exist",
                status: 400,
            };
        }
        else {
            const addProduct = new haldiramProductEntity_1.haldiramProductEntity();
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
    async ProductList(request) {
        let productList = await this.haldiramProductRepository.find({});
        return { product: productList, message: "success", status: 200 };
    }
    async ProductHistoryList(request) {
        const userId = request.params.user_id;
        if (!userId) {
            return { message: "User ID is required", status: 400 };
        }
        try {
            let productList = await this.haldiramProductRepository.find({
                where: { user_id: userId }
            });
            return { product: productList, message: "success", status: 200 };
        }
        catch (error) {
            return { message: "Error retrieving products", status: 500, error: error.message };
        }
    }
};
exports.haldiramService = haldiramService;
exports.haldiramService = haldiramService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.Logger)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __param(2, (0, typeorm_1.InjectRepository)(haldiramUsersEntity_1.haldiramUsersEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(haldiramStoreEntity_1.haldiramStoreEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(haldiramProductEntity_1.haldiramProductEntity)),
    __metadata("design:paramtypes", [common_1.Logger, Object, typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], haldiramService);
//# sourceMappingURL=haldiram.service.js.map