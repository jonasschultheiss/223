'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var UserCreateNew_1 = require('./controller/user/UserCreateNew');
var UserGetAll_1 = require('./controller/user/UserGetAll');
var UserDelete_1 = require('./controller/user/UserDelete');
var UserGetOne_1 = require('./controller/user/UserGetOne');
var UserTest_1 = require('./controller/user/UserTest');
var UserLogin_1 = require('./controller/auth/UserLogin');
var UserGetProfileImage_1 = require('./controller/user/UserGetProfileImage');
var UserSetProfileImage_1 = require('./controller/user/UserSetProfileImage');
var ImageCreateNew_1 = require('./controller/image/ImageCreateNew');
var ImageDelete_1 = require('./controller/image/ImageDelete');
var ImageGetAll_1 = require('./controller/image/ImageGetAll');
var ImageGetFromUser_1 = require('./controller/image/ImageGetFromUser');
var ImageGetOne_1 = require('./controller/image/ImageGetOne');
var ImageLike_1 = require('./controller/image/ImageLike');
var ImageUnlike_1 = require('./controller/image/ImageUnlike');
var CommentCreateNew_1 = require('./controller/comment/CommentCreateNew');
var CommentDelete_1 = require('./controller/comment/CommentDelete');
var CommentGetAll_1 = require('./controller/comment/CommentGetAll');
var CommentGetFromUser_1 = require('./controller/comment/CommentGetFromUser');
var UserGetRole_1 = require('./controller/auth/UserGetRole');
var UserSetRole_1 = require('./controller/auth/UserSetRole');
var CommentGetAllFromPost_1 = require('./controller/comment/CommentGetAllFromPost');
exports.AppRoutes = [
  {
    path: '/login',
    method: 'post',
    action: UserLogin_1.userLogin,
  },
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
    path: '/user/role/:id',
    method: 'get',
    action: UserGetRole_1.userGetRole,
  },
  {
    path: '/user/role',
    method: 'post',
    action: UserSetRole_1.userSetRole,
  },
  {
    path: '/user/profilepicture/:id',
    method: 'get',
    action: UserGetProfileImage_1.userGetProfileImage,
  },
  {
    path: '/user/profilepicture',
    method: 'post',
    action: UserSetProfileImage_1.userSetProfileImage,
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
    path: '/image/:id',
    method: 'get',
    action: ImageGetOne_1.imageGetOne,
  },
  {
    path: '/image/like',
    method: 'post',
    action: ImageLike_1.imageLike,
  },
  {
    path: '/image/like',
    method: 'delete',
    action: ImageUnlike_1.imageUnlike,
  },
  {
    path: '/image/user/:userId',
    method: 'get',
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
    path: '/comment/:id',
    method: 'get',
    action: CommentGetFromUser_1.commentGetFromUser,
  },
  {
    path: '/comment/post/:id',
    method: 'get',
    action: CommentGetAllFromPost_1.commentGetAllFromPost,
  },
  {
    path: '/comment/id',
    method: 'delete',
    action: CommentDelete_1.commentDelete,
  },
];
//# sourceMappingURL=routes.js.map
