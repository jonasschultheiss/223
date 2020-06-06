import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {User} from '../../entity/User';

export async function userCreateNew(request: Request, response: Response) {

  //TODO: Refactor with Transaction from typeORM
  //https://typeorm.io/#/transactions
  const data = request.body;
  await getManager()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values({username: data.username, password: data.password})
    .execute();

  response.send(203);
}
