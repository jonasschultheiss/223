"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserCreateNew_1 = require("./controller/UserCreateNew");
var UserGetAll_1 = require("./controller/UserGetAll");
exports.AppRoutes = [
    {
        path: '/users',
        method: 'post',
        action: UserCreateNew_1.userCreateNew,
    },
    {
        path: '/user',
        method: 'get',
        action: UserGetAll_1.userGetAll,
    },
];
//# sourceMappingURL=routes.js.map