import {Request, Response} from 'express';
import {getManager, getConnection} from 'typeorm';
import {User} from '../../entity/User';
import * as jwt from 'jsonwebtoken';
export async function userGetRole(request: Request, response: Response) {
  // get a connection and create a new query runner
  const connection = await getConnection();
  const authHeader = request.headers.authorization;
  const token = authHeader.split(' ')[1];

  const sentData = jwt.decode(token);

  let role = null;
  if (sentData.role === 'admin') {
    const userData = await connection
      .getRepository(User)
      .createQueryBuilder('user')
      .setLock('optimistic', 1)
      .leftJoinAndSelect('user.role', 'role')
      .where('user.id = :id', {id: sentData.userId})
      .getOne();

    response.status(200).json(userData.role);
  } else {
    response.status(418).json('You not Admin b****');
  }
}
