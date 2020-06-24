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
var User_1 = require('./User');
var Comment_1 = require('./Comment');
var Like_1 = require('./Like');
var Image = /** @class */ (function () {
  function Image() {}
  __decorate(
    [typeorm_1.PrimaryGeneratedColumn(), __metadata('design:type', Number)],
    Image.prototype,
    'id',
    void 0
  );
  __decorate(
    [typeorm_1.VersionColumn(), __metadata('design:type', Number)],
    Image.prototype,
    'version',
    void 0
  );
  __decorate(
    [typeorm_1.UpdateDateColumn(), __metadata('design:type', String)],
    Image.prototype,
    'updateDate',
    void 0
  );
  __decorate(
    [typeorm_1.Column(), __metadata('design:type', String)],
    Image.prototype,
    'title',
    void 0
  );
  __decorate(
    [typeorm_1.Column('text'), __metadata('design:type', String)],
    Image.prototype,
    'content',
    void 0
  );
  __decorate(
    [
      typeorm_1.ManyToOne(
        function (type) {
          return User_1.User;
        },
        function (user) {
          return user.images;
        },
        {
          onDelete: 'CASCADE',
        }
      ),
      __metadata('design:type', User_1.User),
    ],
    Image.prototype,
    'user',
    void 0
  );
  __decorate(
    [
      typeorm_1.OneToMany(
        function (type) {
          return Comment_1.Comment;
        },
        function (comment) {
          return comment.image;
        }
      ),
      __metadata('design:type', Array),
    ],
    Image.prototype,
    'comment',
    void 0
  );
  __decorate(
    [
      typeorm_1.OneToMany(
        function (type) {
          return Like_1.Like;
        },
        function (like) {
          return like.image;
        }
      ),
      __metadata('design:type', Array),
    ],
    Image.prototype,
    'like',
    void 0
  );
  Image = __decorate([typeorm_1.Entity()], Image);
  return Image;
})();
exports.Image = Image;
//# sourceMappingURL=Image.js.map
