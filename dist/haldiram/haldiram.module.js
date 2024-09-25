"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const haldiram_controller_1 = require("./haldiram.controller");
const serve_static_1 = require("@nestjs/serve-static");
const haldiramStoreEntity_1 = require("./Entity/haldiramStoreEntity");
const haldiramUsersEntity_1 = require("./Entity/haldiramUsersEntity");
const haldiram_service_1 = require("./haldiram.service");
const haldiramProductEntity_1 = require("./Entity/haldiramProductEntity");
let CmsModule = class CmsModule {
};
exports.CmsModule = CmsModule;
exports.CmsModule = CmsModule = __decorate([
    (0, common_1.Module)({
        imports: [serve_static_1.ServeStaticModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([haldiramStoreEntity_1.haldiramStoreEntity, haldiramUsersEntity_1.haldiramUsersEntity, haldiramProductEntity_1.haldiramProductEntity])],
        controllers: [haldiram_controller_1.haldiramController],
        providers: [haldiram_service_1.haldiramService, common_1.Logger]
    })
], CmsModule);
//# sourceMappingURL=haldiram.module.js.map