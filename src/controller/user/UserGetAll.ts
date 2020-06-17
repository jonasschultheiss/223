import {Request, Response} from 'express';
import {getManager, getRepository} from 'typeorm';
import {User} from '../../entity/User';

export async function userGetAll(request: Request, response: Response) {
  const users = await getRepository(User)
    .createQueryBuilder('user')
    //can't setLock Optimistic with get Many
    .getMany();
  response.set(users).status(200);
}
