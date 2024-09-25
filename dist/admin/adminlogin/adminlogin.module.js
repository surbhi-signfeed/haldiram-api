"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminloginModule = void 0;
const common_1 = require("@nestjs/common");
const adminlogin_controller_1 = require("./adminlogin.controller");
const adminlogin_service_1 = require("./adminlogin.service");
const typeorm_1 = require("@nestjs/typeorm");
const AdminUserInfoEntity_1 = require("./Entity/AdminUserInfoEntity");
let AdminloginModule = class AdminloginModule {
};
exports.AdminloginModule = AdminloginModule;
exports.AdminloginModule = AdminloginModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([AdminUserInfoEntity_1.AdminUserInfoEntity
            ]),
        ],
        controllers: [adminlogin_controller_1.AdminloginController],
        providers: [adminlogin_service_1.AdminloginService, common_1.Logger]
    })
], AdminloginModule);
//# sourceMappingURL=adminlogin.module.js.map