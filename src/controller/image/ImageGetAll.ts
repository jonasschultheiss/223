import {Request, response, Response} from 'express';
import {createQueryBuilder, getManager, getRepository} from 'typeorm';
import {Image} from '../../entity/Image';

export async function imageGetAll(request: Request, response: Response) {

  const page = request.query.page || 1
  const skip = (request.query.page === "1" ) ? 0 :Number(page) * 10

  const images = await createQueryBuilder("Image")
    .leftJoinAndSelect("Image.user", "user")
    .offset(skip)
    .limit(10)
    .orderBy("Image.updateDate" , "DESC")
    .getMany();

    //can't setLock Optimistic with get Many
  response.status(200).json(images);
}
