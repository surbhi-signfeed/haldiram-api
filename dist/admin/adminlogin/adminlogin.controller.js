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
exports.AdminloginController = void 0;
const common_1 = require("@nestjs/common");
const adminlogin_service_1 = require("./adminlogin.service");
let AdminloginController = class AdminloginController {
    constructor(adminloginservice, logger) {
        this.adminloginservice = adminloginservice;
        this.logger = logger;
    }
};
exports.AdminloginController = AdminloginController;
exports.AdminloginController = AdminloginController = __decorate([
    (0, common_1.Controller)('admin'),
    __param(1, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [adminlogin_service_1.AdminloginService, common_1.Logger])
], AdminloginController);
//# sourceMappingURL=adminlogin.controller.js.map