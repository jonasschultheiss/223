import {userCreateNew} from './controller/user/UserCreateNew';
import {userGetAll} from './controller/user/UserGetAll';
import {userDelete} from './controller/user/UserDelete';
import {userGetOne} from './controller/user/UserGetOne';
import {userTest} from './controller/user/UserTest';

import {userLogin} from './controller/auth/UserLogin';

import {userGetProfileImage} from './controller/user/UserGetProfileImage';
import {userSetProfileImage} from './controller/user/UserSetProfileImage';

import {imageCreateNew} from './controller/image/ImageCreateNew';
import {imageDelete} from './controller/image/ImageDelete';
import {imageGetAll} from './controller/image/ImageGetAll';
import {imageGetFromUser} from './controller/image/ImageGetFromUser';
import {imageGetOne} from './controller/image/ImageGetOne';
import {imageLike} from './controller/image/ImageLike';

import {commentCreateNew} from './controller/comment/CommentCreateNew';
import {commentDelete} from './controller/comment/CommentDelete';
import {commentGetAll} from './controller/comment/CommentGetAll';
import {commentGetFromUser} from './controller/comment/CommentGetFromUser';
import {userGetRole} from './controller/auth/UserGetRole';
import {userSetRole} from './controller/auth/UserSetRole';

export const AppRoutes = [
  {
    path: '/login',
    method: 'post',
    action: userLogin,
  },
  {
    path: '/test',
    method: 'post',
    action: userTest,
  },
  {
    path: '/user',
    method: 'post',
    action: userCreateNew,
  },
  {
    path: '/user',
    method: 'get',
    action: userGetAll,
  },
  {
    path: '/user/:id',
    method: 'get',
    action: userGetOne,
  },
  {
    path: '/user',
    method: 'delete',
    action: userDelete,
  },
  {
    path: '/user/role/:id',
    method: 'get',
    action: userGetRole,
  },
  {
    path: '/user/role/:id',
    method: 'set',
    action: userSetRole,
  },
  {
    path: '/user/profilepicture/:id',
    method: 'get',
    action: userGetProfileImage,
  },
  {
    path: '/user/profilepicture',
    method: 'post',
    action: userSetProfileImage,
  },
  {
    path: '/image',
    method: 'get',
    action: imageGetAll,
  },
  {
    path: '/image',
    method: 'post',
    action: imageCreateNew,
  },
  {
    path: '/image/:id',
    method: 'get',
    action: imageGetOne,
  },
  {
    path: '/image/like',
    method: 'post',
    action: imageLike,
  },

  {
    path: '/image/user/:userId',
    method: 'get',
    action: imageGetFromUser,
  },
  {
    path: '/image/id',
    method: 'delete',
    action: imageDelete,
  },

  {
    path: '/comment',
    method: 'get',
    action: commentGetAll,
  },
  {
    path: '/comment',
    method: 'post',
    action: commentCreateNew,
  },
  {
    path: '/comment/:id',
    method: 'get',
    action: commentGetFromUser,
  },
  {
    path: '/comment/id',
    method: 'delete',
    action: commentDelete,
  },
];
