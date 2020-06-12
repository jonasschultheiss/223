import {Request, Response} from 'express';
import {getConnection} from 'typeorm';
import {User} from '../../entity/User';
export async function userTest(request: Request, response: Response) {


  const user = new User()
  user.username = request.body.username
  user.password = request.body.password

  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

// establish real database connection using our new query runner
  await queryRunner.connect();

// lets now open a new transaction:
  await queryRunner.startTransaction();

  try {

    // execute some operations on this transaction:
    await queryRunner.manager.save(user);

    // commit transaction now:
    await queryRunner.commitTransaction();

  } catch (err) {

    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();

  } finally {

    // you need to release query runner which is manually created:
    await queryRunner.release();
  }
  console.log(user)
  response.status(200).send();

}