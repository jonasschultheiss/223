import {Request, Response} from 'express';
import {getConnection, getRepository} from 'typeorm';
import {Comment} from '../../entity/Comment';

export async function commentGetFromUser(request: Request, response: Response) {
  const connection = await getConnection();
  const queryRunner = await connection.createQueryRunner();
  const userId = request.params.id;

  const comment = await getRepository(Comment)
    .createQueryBuilder('comment')
    //.setLock('optimistic', 1)
    .select()
    .where('user = :id', {id: userId})
    .getOne();
  console.log(comment);
  response.status(200).json(comment);
}
