import {Request, Response} from 'express';
import {getConnection, getManager} from 'typeorm';
import {User} from '../../entity/User';
import * as jwt from 'jsonwebtoken';

export async function userDelete(request: Request, response: Response) {
  if (request.headers.authorization) {
    const authHeader = request.headers.authorization;
    const token = authHeader.split(' ')[1];

    const sentData = jwt.decode(token);
    if (sentData.role === 'admin' || sentData.userId === request.body.userId) {
      const data = request.body;
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(User)
        .where('id = :id', {
          id: data.userId,
        })
        .execute();

      response.status(200).json({message: 'image successfully deleted'});
    }
  } else {
    response.status(401).json({message: 'no auth token in header'});
  }
}
