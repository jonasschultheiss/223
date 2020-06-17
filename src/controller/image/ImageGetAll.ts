import {Request, Response} from 'express';
import {getManager, getRepository} from 'typeorm';
import {Image} from '../../entity/Image';

export async function imageGetAll(request: Request, response: Response) {
  const images = await getRepository(Image)
    .createQueryBuilder('image')
    //can't setLock Optimistic with get Many
    .getMany();
  response.set(images).status(200);
}
