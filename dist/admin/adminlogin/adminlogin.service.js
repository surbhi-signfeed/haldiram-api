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
exports.AdminloginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let AdminloginService = class AdminloginService {
    constructor(connection) {
        this.connection = connection;
    }
    async AdminUserLogin(adminUserLogindto) {
        const userList = await this.connection.query(`SELECT id, email,  store_id, status FROM admin_users where email = "${adminUserLogindto.email}" 
       and password = "${adminUserLogindto.password}"`);
        return { user: userList, accessToken: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', status: 200 };
    }
    async AdminValidateUserLogin() {
        const userList = await this.connection.query(`SELECT id, concat(first_name, last_name) as fullName, 
       email, email, mobile, user_role as role, '' as avatar, 
       is_active as status FROM admin_users where email = "govind@harij.in" 
       and password = "123456"`);
        return { user: userList, accessToken: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', status: 200 };
    }
};
exports.AdminloginService = AdminloginService;
exports.AdminloginService = AdminloginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [Object])
], AdminloginService);
//# sourceMappingURL=adminlogin.service.js.map