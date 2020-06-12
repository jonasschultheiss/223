'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var UserCreateNew_1 = require('./controller/user/UserCreateNew');
var UserGetAll_1 = require('./controller/user/UserGetAll');
var UserDelete_1 = require('./controller/user/UserDelete');
var UserGetOne_1 = require('./controller/user/UserGetOne');
var UserTest_1 = require('./controller/user/UserTest');
var ImageCreateNew_1 = require('./controller/image/ImageCreateNew');
var ImageDelete_1 = require('./controller/image/ImageDelete');
var ImageGetAll_1 = require('./controller/image/ImageGetAll');
var ImageGetFromUser_1 = require('./controller/image/ImageGetFromUser');
var ImageGetOne_1 = require('./controller/image/ImageGetOne');
var ImageLike_1 = require('./controller/image/ImageLike');
var CommentCreateNew_1 = require('./controller/comment/CommentCreateNew');
var CommentDelete_1 = require('./controller/comment/CommentDelete');
var CommentGetAll_1 = require('./controller/comment/CommentGetAll');
var CommentGetFromUser_1 = require('./controller/comment/CommentGetFromUser');
exports.AppRoutes = [
  {
    path: '/test',
    method: 'post',
    action: UserTest_1.userTest,
  },
  {
    path: '/user',
    method: 'post',
    action: UserCreateNew_1.userCreateNew,
  },
  {
    path: '/user',
    method: 'get',
    action: UserGetAll_1.userGetAll,
  },
  {
    path: '/user/:id',
    method: 'get',
    action: UserGetOne_1.userGetOne,
  },
  {
    path: '/user',
    method: 'delete',
    action: UserDelete_1.userDelete,
  },
  {
    path: '/image',
    method: 'get',
    action: ImageGetAll_1.imageGetAll,
  },
  {
    path: '/image',
    method: 'post',
    action: ImageCreateNew_1.imageCreateNew,
  },
  {
    path: '/image/id',
    method: 'post',
    action: ImageGetOne_1.imageGetOne,
  },
  {
    path: '/image/like',
    method: 'post',
    action: ImageLike_1.imageLike,
  },
  {
    path: '/image/username',
    method: 'post',
    action: ImageGetFromUser_1.imageGetFromUser,
  },
  {
    path: '/image/id',
    method: 'delete',
    action: ImageDelete_1.imageDelete,
  },
  {
    path: '/comment',
    method: 'get',
    action: CommentGetAll_1.commentGetAll,
  },
  {
    path: '/comment',
    method: 'post',
    action: CommentCreateNew_1.commentCreateNew,
  },
  {
    path: '/comment/username',
    method: 'post',
    action: CommentGetFromUser_1.commentGetFromUser,
  },
  {
    path: '/comment/id',
    method: 'delete',
    action: CommentDelete_1.commentDelete,
  },
];
//# sourceMappingURL=routes.js.map
