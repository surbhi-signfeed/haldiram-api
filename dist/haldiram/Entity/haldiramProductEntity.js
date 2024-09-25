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
Object.defineProperty(exports, "__esModule", { value: true });
exports.haldiramProductEntity = void 0;
const typeorm_1 = require("typeorm");
let haldiramProductEntity = class haldiramProductEntity {
};
exports.haldiramProductEntity = haldiramProductEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], haldiramProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'int' }),
    __metadata("design:type", Number)
], haldiramProductEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'brand', type: 'varchar' }),
    __metadata("design:type", String)
], haldiramProductEntity.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'product_name', type: 'varchar' }),
    __metadata("design:type", String)
], haldiramProductEntity.prototype, "product_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'batch', type: 'varchar' }),
    __metadata("design:type", String)
], haldiramProductEntity.prototype, "batch", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address', type: 'varchar' }),
    __metadata("design:type", String)
], haldiramProductEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'grossWT', type: 'varchar' }),
    __metadata("design:type", String)
], haldiramProductEntity.prototype, "grossWT", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'netWT', type: 'varchar' }),
    __metadata("design:type", String)
], haldiramProductEntity.prototype, "netWT", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'packing_date', type: 'date' }),
    __metadata("design:type", Date)
], haldiramProductEntity.prototype, "packing_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'used_by', type: 'date' }),
    __metadata("design:type", Date)
], haldiramProductEntity.prototype, "used_by", void 0);
exports.haldiramProductEntity = haldiramProductEntity = __decorate([
    (0, typeorm_1.Entity)('product')
], haldiramProductEntity);
//# sourceMappingURL=haldiramProductEntity.js.map