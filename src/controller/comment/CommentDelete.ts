import {Request, Response} from 'express';
import {getConnection, getManager} from 'typeorm';
import {Comment} from '../../entity/Comment';
import * as jwt from 'jsonwebtoken';

export async function commentDelete(request: Request, response: Response) {
  if (request.headers.authorization) {
    const authHeader = request.headers.authorization;
    const token = JSON.parse(authHeader).split(' ')[1];

    const sentData = jwt.decode(token);
    if ((sentData.userId = request.body.userId)) {
      const data = request.body;
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Comment)
        .where('user = :id', {id: sentData.userId})
        .execute();

      response.status(200).json({message: 'comment successfully deleted'});
    }
  } else {
    response.status(401).json({message: 'no auth token in header'});
  }
}
