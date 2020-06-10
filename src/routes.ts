import {userCreateNew} from './controller/user/UserCreateNew';
import {userGetAll} from './controller/user/UserGetAll';
import {userDelete} from './controller/user/UserDelete';
import {userGetOne} from './controller/user/UserGetOne';

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

export const AppRoutes = [
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
    path: '/image/id',
    method: 'post',
    action: imageGetOne,
  },
  {
    path: '/image/like',
    method: 'post',
    action: imageLike,
  },
  {
    path: '/image/username',
    method: 'post',
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
    path: '/comment/username',
    method: 'post',
    action: commentGetFromUser,
  },
  {
    path: '/comment/id',
    method: 'delete',
    action: commentDelete,
  },
];
