import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Comment} from '../../entity/Comment';

export async function commentCreateNew(request: Request, response: Response) {
  const data = request.body;
  await getManager()
    .createQueryBuilder()
    .insert()
    .into(Comment)
    .values({text: data.text, user: data.userId, image: data.imageId})
    .execute();

  response.send(203);
}
