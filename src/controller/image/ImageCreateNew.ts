import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Image} from '../../entity/Image';

export async function imageCreateNew(request: Request, response: Response) {
  const data = request.body;
  await getManager()
    .createQueryBuilder()
    .insert()
    .into(Image)
    .values({title: data.title, content: data.content, user: data.userID})
    .execute();

  response.send(203);
}
