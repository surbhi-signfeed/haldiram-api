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
exports.haldiramStoreEntity = void 0;
const typeorm_1 = require("typeorm");
let haldiramStoreEntity = class haldiramStoreEntity {
};
exports.haldiramStoreEntity = haldiramStoreEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], haldiramStoreEntity.prototype, "store_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'storename', type: 'varchar' }),
    __metadata("design:type", String)
], haldiramStoreEntity.prototype, "storename", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address', type: 'varchar' }),
    __metadata("design:type", String)
], haldiramStoreEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contact', type: 'int' }),
    __metadata("design:type", Number)
], haldiramStoreEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gst_no', type: 'varchar' }),
    __metadata("design:type", String)
], haldiramStoreEntity.prototype, "gst_no", void 0);
exports.haldiramStoreEntity = haldiramStoreEntity = __decorate([
    (0, typeorm_1.Entity)('store')
], haldiramStoreEntity);
//# sourceMappingURL=haldiramStoreEntity.js.map