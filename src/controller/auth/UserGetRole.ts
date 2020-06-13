import {Request, Response} from 'express';
import {getManager, getConnection} from 'typeorm';
import {User} from '../../entity/User';
import {Role} from '../../entity/Role';
export async function userGetRole(request: Request, response: Response) {
  // get a connection and create a new query runner
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();
  let role = null;

  // establish real database connection using our new query runner
  await queryRunner.connect();

  try {
    role = await queryRunner.manager.find(Role, {
      where: {user: request.params.id},
    });
  } catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
  } finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
  }

  response.status(200).json(role);
}
