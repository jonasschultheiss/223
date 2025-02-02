'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', {value: true});
var typeorm_1 = require('typeorm');
var Image_1 = require('./Image');
var User_1 = require('./User');
var Like = /** @class */ (function () {
  function Like() {}
  __decorate(
    [typeorm_1.PrimaryGeneratedColumn(), __metadata('design:type', Number)],
    Like.prototype,
    'id',
    void 0
  );
  __decorate(
    [
      typeorm_1.ManyToOne(
        function (type) {
          return Image_1.Image;
        },
        function (image) {
          return image.like;
        }
      ),
      __metadata('design:type', Image_1.Image),
    ],
    Like.prototype,
    'image',
    void 0
  );
  __decorate(
    [
      typeorm_1.ManyToOne(
        function (type) {
          return User_1.User;
        },
        function (user) {
          return user.likes;
        }
      ),
      __metadata('design:type', User_1.User),
    ],
    Like.prototype,
    'user',
    void 0
  );
  Like = __decorate([typeorm_1.Entity()], Like);
  return Like;
})();
exports.Like = Like;
//# sourceMappingURL=Like.js.map
