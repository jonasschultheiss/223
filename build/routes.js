"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserCreateNew_1 = require("./controller/UserCreateNew");
exports.AppRoutes = [
    {
        path: '/users',
        method: 'post',
        action: UserCreateNew_1.userCreateNew,
    },
];
//# sourceMappingURL=routes.js.map