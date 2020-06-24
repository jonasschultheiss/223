import {Request, response, Response} from 'express';
import {createQueryBuilder, getManager, getRepository} from 'typeorm';
import {Image} from '../../entity/Image';

export async function imageGetAll(request: Request, response: Response) {

  const page = Number(request.query.page) || 1
  const skip = (page === 1) ? 0 : Number(page-1) * 10

  const images = await createQueryBuilder("Image")
    .leftJoinAndSelect("Image.user", "user")
    .leftJoinAndSelect("Image.like", "like")
    .offset(skip)
    .limit(10)
    .orderBy("Image.updateDate" , "DESC")
    .getMany();

  response.status(200).json(images);
}
