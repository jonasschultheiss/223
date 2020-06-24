import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import {Comment} from '../../entity/Comment';

export async function commentGetAll(request: Request, response: Response) {
    
  const comments = await getRepository(Comment)
    .createQueryBuilder('comment')
    //can't setLock Optimistic with get Many
    .getMany();
  response.status(200).json(comments);
}
