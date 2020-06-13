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
var typeorm_1 = require("typeorm");
var Profilepicture = /** @class */ (function () {
    function Profilepicture() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Profilepicture.prototype, "id", void 0);
    __decorate([
        typeorm_1.VersionColumn(),
        __metadata("design:type", Number)
    ], Profilepicture.prototype, "version", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", String)
    ], Profilepicture.prototype, "updateDate", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], Profilepicture.prototype, "content", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Profilepicture.prototype, "user", void 0);
    Profilepicture = __decorate([
        typeorm_1.Entity()
    ], Profilepicture);
    return Profilepicture;
}());
exports.Profilepicture = Profilepicture;
//# sourceMappingURL=Profilepicture.js.map