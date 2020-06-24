import {Request, Response} from 'express';
import {getConnection, getRepository} from 'typeorm';
import {Comment} from '../../entity/Comment';

export async function commentGetFromUser(request: Request, response: Response) {
  const connection = await getConnection();

  const userId = request.params.id;

  //TODO: maybe implement JWT Token with check

  const comments = await connection
    .getRepository(Comment)
    .createQueryBuilder('comment')
    .leftJoinAndSelect("comment.user", "user")
    .where(
      "comment.user=:id", {id: 17}
    )
    //can't setLock Optimistic with get Many
    .getMany();

  response.status(200).json(comments);
}
