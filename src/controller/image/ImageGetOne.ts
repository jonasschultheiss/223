import {Request, Response} from 'express';
import {getConnection, getRepository} from 'typeorm';
import {Image} from '../../entity/Image';

export async function imageGetOne(request: Request, response: Response) {
  const connection = getConnection();
  const imageId = request.params.id;

  const image = await getRepository(Image)
    .createQueryBuilder('image')
    .setLock('optimistic', 1)
    .select()
    .where('id = :id', {id: imageId})
    .getOne();
  response.status(200).json(image);
}
