import {Request, Response} from 'express';
import {getConnection, getRepository} from 'typeorm';
import {Comment} from '../../entity/Comment';

export async function commentGetFromUser(request: Request, response: Response) {
  const connection = await getConnection();
  const queryRunner = await connection.createQueryRunner();
  const userId = request.params.id;

  //TODO: maybe implement JWT Token with check

  const comment = await connection
    .getRepository(Comment)
    .createQueryBuilder('comment')
    .select()
    .where('comment.user = :id', {id: userId})
    .getMany();

  response.status(200).json(comment);
}
