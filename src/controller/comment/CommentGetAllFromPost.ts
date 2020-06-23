import {Request, Response} from 'express';
import {getManager, getRepository} from 'typeorm';
import {Comment} from '../../entity/Comment';

export async function commentGetAllFromPost(request: Request, response: Response) {
  const postId = request.params.id
  const comments = await getRepository(Comment)
    .createQueryBuilder('comment')
    .where(
      "comment.image=:id", {id: postId}
    )
    //can't setLock Optimistic with get Many
    .getMany();
  response.status(200).json(comments);

}
