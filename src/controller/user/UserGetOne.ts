import {Request, Response} from 'express';
import {getConnection, getManager} from 'typeorm';
import {User} from '../../entity/User';

export async function userGetOne(request: Request, response: Response) {
  // get a connection and create a new query runner
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();
  let user = null;

  // establish real database connection using our new query runner
  await queryRunner.connect();


  try {
    user = await queryRunner.manager.find(User, {
      where: {id: request.params.id},
    });
  } catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
  } finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
  }


  response.status(200).json(user);
}
