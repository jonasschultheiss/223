import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Like} from '../../entity/Like';

export async function imageUnlike(request: Request, response: Response) {
  const data = request.body;
  await getManager()
    .createQueryBuilder()
    .delete()
    //TODO: refactor with transaction
    .from(Like)
    .where({image: data.imageId, user: data.userId})
    .execute();

  response.send(203);
}
