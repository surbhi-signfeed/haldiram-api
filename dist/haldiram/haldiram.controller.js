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
exports.haldiramController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../admin/auth/jwt-auth.guard");
const haldiramUsersDTO_1 = require("./dto/haldiramUsersDTO");
const haldiramStoreDTO_1 = require("./dto/haldiramStoreDTO");
const haldiram_service_1 = require("./haldiram.service");
const haldiramProoductDTO_1 = require("./dto/haldiramProoductDTO");
;
let haldiramController = class haldiramController {
    constructor(haldiramService, logger) {
        this.haldiramService = haldiramService;
        this.logger = logger;
    }
    async UserAdd(request, UserDTO) {
        return this.haldiramService.UserAdd(request, UserDTO);
    }
    async liser(request) {
        return this.haldiramService.UserList(request);
    }
    async StoreAdd(request, StoreDTO) {
        return this.haldiramService.StoreAdd(request, StoreDTO);
    }
    async listStore(request) {
        return this.haldiramService.StoreList(request);
    }
    async ProductAdd(request, ProductDTO) {
        return this.haldiramService.ProductAdd(request, ProductDTO);
    }
    async listProduct(request) {
        return this.haldiramService.ProductList(request);
    }
    async ProductHistoryList(userId) {
        return this.haldiramService.ProductList(userId);
    }
};
exports.haldiramController = haldiramController;
__decorate([
    (0, common_1.Post)("AddUsers"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, haldiramUsersDTO_1.haldiramUsersDTO]),
    __metadata("design:returntype", Promise)
], haldiramController.prototype, "UserAdd", null);
__decorate([
    (0, common_1.Get)('ListUser'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], haldiramController.prototype, "liser", null);
__decorate([
    (0, common_1.Post)("AddStore"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, haldiramStoreDTO_1.haldiramStoreDTO]),
    __metadata("design:returntype", Promise)
], haldiramController.prototype, "StoreAdd", null);
__decorate([
    (0, common_1.Get)('ListStore'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], haldiramController.prototype, "listStore", null);
__decorate([
    (0, common_1.Post)("AddProduct"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, haldiramProoductDTO_1.haldiramProductDTO]),
    __metadata("design:returntype", Promise)
], haldiramController.prototype, "ProductAdd", null);
__decorate([
    (0, common_1.Get)('ListProduct'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], haldiramController.prototype, "listProduct", null);
__decorate([
    (0, common_1.Get)('ListProductHistory/:user_id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], haldiramController.prototype, "ProductHistoryList", null);
exports.haldiramController = haldiramController = __decorate([
    (0, common_1.Controller)("haldiram"),
    __param(1, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [haldiram_service_1.haldiramService,
        common_1.Logger])
], haldiramController);
//# sourceMappingURL=haldiram.controller.js.map