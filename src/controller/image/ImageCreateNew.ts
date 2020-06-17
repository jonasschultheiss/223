import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Image} from '../../entity/Image';
import * as jwt from 'jsonwebtoken';

export async function imageCreateNew(request: Request, response: Response) {
  const data = request.body;

  if (request.headers.authorization) {
    const authHeader = request.headers.authorization;
    const token = JSON.parse(authHeader.split(' ')[1]);
    const sentData = jwt.decode(token);
    await getManager()
      .createQueryBuilder()
      .setLock('optimistic', 1)
      .insert()
      .into(Image)
      .values({
        title: data.text,
        content: data.imageText,
        user: sentData.userId,
      })
      .execute();

    response.status(203).json({test: 'test'});
  } else {
    response.status(401).json({message: 'no auth token in header'});
  }
}
