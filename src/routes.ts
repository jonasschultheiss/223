import {userCreateNew} from './controller/UserCreateNew';

export const AppRoutes = [
  {
    path: '/users',
    method: 'post',
    action: userCreateNew,
  },
];
