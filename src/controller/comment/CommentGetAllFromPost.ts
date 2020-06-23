import {Request, Response} from 'express';
import {getManager, getRepository} from 'typeorm';
import {Comment} from '../../entity/Comment';

export async function commentGetAllFromPost(request: Request, response: Response) {
  const postId = request.body.postId
  const comments = await getRepository(Comment)
    .createQueryBuilder('comment')
    .where(
      "comment.id=:id", {id: postId}
    )
    //can't setLock Optimistic with get Many
    .getMany();
  response.set(comments).status(200);

}
