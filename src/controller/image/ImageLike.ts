import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Like} from '../../entity/Like';

export async function imageLike(request: Request, response: Response) {
  const data = request.body;
  await getManager()
    .createQueryBuilder()
    .insert()
    //TODO: refactor with transaction
    .into(Like)
    .values({image: data.imageId, user: data.userId})
    .execute();

  response.send(203);
}
