import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Comment} from '../../entity/Comment';
import {User} from '../../entity/User';
import {Image} from '../../entity/Image';
import * as jwt from 'jsonwebtoken';

export async function commentCreateNew(request: Request, response: Response) {
  const data = request.body;

  console.log(request.headers);
  if (request.headers.authorization) {
    const authHeader = request.headers.authorization;

    const token = authHeader.split(' ')[1];
    const sentData = jwt.decode(token);

    await getManager()
      .createQueryBuilder()
      .insert()
      .into(Comment)
      .values({text: data.text, user: sentData.userId, image: data.imageId})
      .execute();

    response.status(203).json({message: 'Comment created'});
  } else {
    response.status(401).json({message: 'no auth token in header'});
  }
}
