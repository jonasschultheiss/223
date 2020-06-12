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
var User_1 = require('../../entity/User');
function userTest(request, response) {
  return __awaiter(this, void 0, void 0, function () {
    var user, connection, queryRunner, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          user = new User_1.User();
          user.username = request.body.username;
          user.password = request.body.password;
          connection = typeorm_1.getConnection();
          queryRunner = connection.createQueryRunner();
          // establish real database connection using our new query runner
          return [4 /*yield*/, queryRunner.connect()];
        case 1:
          // establish real database connection using our new query runner
          _a.sent();
          // lets now open a new transaction:
          return [4 /*yield*/, queryRunner.startTransaction()];
        case 2:
          // lets now open a new transaction:
          _a.sent();
          _a.label = 3;
        case 3:
          _a.trys.push([3, 6, 8, 10]);
          // execute some operations on this transaction:
          return [4 /*yield*/, queryRunner.manager.save(user)];
        case 4:
          // execute some operations on this transaction:
          _a.sent();
          // commit transaction now:
          return [4 /*yield*/, queryRunner.commitTransaction()];
        case 5:
          // commit transaction now:
          _a.sent();
          return [3 /*break*/, 10];
        case 6:
          err_1 = _a.sent();
          // since we have errors let's rollback changes we made
          return [4 /*yield*/, queryRunner.rollbackTransaction()];
        case 7:
          // since we have errors let's rollback changes we made
          _a.sent();
          return [3 /*break*/, 10];
        case 8:
          // you need to release query runner which is manually created:
          return [4 /*yield*/, queryRunner.release()];
        case 9:
          // you need to release query runner which is manually created:
          _a.sent();
          return [7 /*endfinally*/];
        case 10:
          console.log(user);
          response.status(200).send();
          return [2 /*return*/];
      }
    });
  });
}
exports.userTest = userTest;
//# sourceMappingURL=UserTest.js.map
