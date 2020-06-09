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
var Image_1 = require("./Image");
var Comment_1 = require("./Comment");
var Role_1 = require("./Role");
var Like_1 = require("./Like");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.VersionColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "version", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", String)
    ], User.prototype, "updateDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Role_1.Role; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Role_1.Role)
    ], User.prototype, "role", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Image_1.Image; }, function (image) { return image.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "images", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Comment_1.Comment; }, function (comment) { return comment.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "comments", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Like_1.Like; }, function (like) { return like.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "likes", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map