import {Request, Response} from 'express';
import {getConnection, getManager, getRepository} from 'typeorm';
import {User} from '../../entity/User';

export async function userGetOne(request: Request, response: Response) {
  // get a connection and create a new query runner
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();
  const userId = request.params.id;

  const user = await getRepository(User)
    .createQueryBuilder('user')
    .setLock('optimistic', 1)
    .select()
    .where('id = :id', {id: userId})
    .getOne();
  response.status(200).json(user);
}
