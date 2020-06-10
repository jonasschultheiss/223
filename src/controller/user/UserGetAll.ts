import {Request, Response} from 'express';
import {getManager, getRepository} from 'typeorm';
import {User} from '../../entity/User';

export async function userGetAll(request: Request, response: Response) {
  //const data = request.body;
  const users = await getRepository(User).createQueryBuilder('user').getMany();

  response.set(users).status(200);
  //await getManager()
  //    .createQueryBuilder()
  ///    .select("User")
  //    .from(User, "User")
  //    .execute();
  //console.log('Hello World!');
  ////response.setHeader('test', 400);
  //response.sendStatus(203);
}
