import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {User} from '../entity/User';

export async function userCreateNew(request: Request, response: Response) {
  const data = request.body;

  await getManager()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values({username: data.username, password: data.password})
    .execute();

  response.send(203);
}
