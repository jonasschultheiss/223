import {Request, Response} from 'express';
import {getConnection} from 'typeorm';
import {Image} from '../../entity/Image';

export async function imageGetFromUser(request: Request, response: Response) {
  const connection = await getConnection();
  const queryRunner = await connection.createQueryRunner();
  const userId = request.params.userId;


  const image = await connection
    .getRepository(Image)
    .createQueryBuilder('image')
    .select()
    .where('image.user = :id', {id: userId})
    .getMany();

  response.status(200).json(image);
}
