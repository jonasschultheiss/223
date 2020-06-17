import {Request, Response} from 'express';
import {getManager, getRepository} from 'typeorm';
import {Image} from '../../entity/Image';

export async function imageGetAll(request: Request, response: Response) {
  const images = await getRepository(Image)
    .createQueryBuilder('image')
    .setLock('optimistic', 1)
    .getMany();
  response.set(images).status(200);
}
