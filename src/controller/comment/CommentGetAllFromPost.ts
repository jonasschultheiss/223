import {Request, Response} from 'express';
import {getConnection, getManager, getRepository} from 'typeorm';
import {Comment} from '../../entity/Comment';
import {User} from "../../entity/User";

export async function commentGetAllFromPost(request: Request, response: Response) {
  const postId = request.params.id
  const connection = getConnection()
  const comments = await connection
    .getRepository(Comment)
    .createQueryBuilder('comment')
    .leftJoinAndSelect("comment.user", "user")
    .where(
      "comment.image=:id", {id: postId}
    )
    //can't setLock Optimistic with get Many
    .getMany();
  response.status(200).json(comments);

}
