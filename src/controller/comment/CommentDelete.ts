import {Request, Response} from 'express';
import {getConnection, getManager} from 'typeorm';
import {Comment} from '../../entity/Comment';

export async function commentDelete(request: Request, response: Response) {
  const data = request.body;
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Comment)
    .where('id = :id', {id: data.commentId})
    .execute();
}
