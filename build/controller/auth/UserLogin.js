'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function (resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = {next: verb(0), throw: verb(1), return: verb(2)}),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {value: op[1], done: false};
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return {value: op[0] ? op[1] : void 0, done: true};
    }
  };
Object.defineProperty(exports, '__esModule', {value: true});
var typeorm_1 = require('typeorm');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv');
var User_1 = require('../../entity/User');
var Profilepicture_1 = require('../../entity/Profilepicture');
function userLogin(request, response) {
  return __awaiter(this, void 0, void 0, function () {
    var sentUser,
      clearPassword,
      connection,
      queryRunner,
      databaseUser,
      userData,
      profilePicture,
      payload,
      token_secret,
      token;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          sentUser = request.body.username;
          clearPassword = request.body.password;
          connection = typeorm_1.getConnection();
          queryRunner = connection.createQueryRunner();
          // establish real database connection using our new query runner
          return [4 /*yield*/, queryRunner.connect()];
        case 1:
          // establish real database connection using our new query runner
          _a.sent();
          return [
            4 /*yield*/,
            queryRunner.manager.findOne(User_1.User, {
              where: {username: sentUser},
            }),
          ];
        case 2:
          databaseUser = _a.sent();
          if (!bcrypt.compare(clearPassword, databaseUser.password))
            return [3 /*break*/, 5];
          return [
            4 /*yield*/,
            connection
              .getRepository(User_1.User)
              .createQueryBuilder('user')
              .leftJoinAndSelect('user.role', 'role')
              .where('username = :name', {name: sentUser})
              .getOne(),
          ];
        case 3:
          userData = _a.sent();
          return [
            4 /*yield*/,
            connection
              .getRepository(Profilepicture_1.Profilepicture)
              .createQueryBuilder('profilePicture')
              .select()
              .where('profilePicture.user = :id', {id: userData.id})
              .getOne(),
          ];
        case 4:
          profilePicture = _a.sent();
          payload = {
            userId: userData.id,
            username: userData.username,
            role: userData.role.name,
            profilePicture: profilePicture ? profilePicture.content : [],
          };
          token_secret = process.env.JWT_SECRET || 'abcdefghijklmnopqrstuvwxyz';
          token = jwt.sign(JSON.stringify(payload), token_secret);
          response
            .status(200)
            .json({
              success: true,
              message: 'Login success',
              access_token: token,
            });
          return [3 /*break*/, 6];
        case 5:
          response.status(200).json({success: false, message: 'Login failed'});
          _a.label = 6;
        case 6:
          return [4 /*yield*/, queryRunner.release()];
        case 7:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
}
exports.userLogin = userLogin;
//# sourceMappingURL=UserLogin.js.map
