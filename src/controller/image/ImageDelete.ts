import {Request, Response} from 'express';
import {getConnection, getManager} from 'typeorm';
import {Image} from '../../entity/Image';
import * as jwt from 'jsonwebtoken';

export async function imageDelete(request: Request, response: Response) {
  if (request.headers.authorization) {
    const authHeader = request.headers.authorization;
    const token = JSON.parse(authHeader).split(' ')[1];

    const sentData = jwt.decode(token);
    if ((sentData.userId === request.body.userId)) {

      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Image)
        .where('id = :imageId', {imageId: sentData.userId})
        .andWhere('user = :id', {id: request.body.imageId})
        .execute();
      response.status(200).json({message: 'image successfully deleted'});
    }
  } else {
    response.status(401).json({message: 'no auth token in header'});
  }
}
