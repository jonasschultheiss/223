import {Request, Response, query} from 'express';
import {getManager} from 'typeorm';
import {getConnection} from 'typeorm';
import {User} from '../../entity/User';
import {Profilepicture} from '../../entity/Profilepicture';
import {CLIENT_RENEG_LIMIT} from 'tls';
export async function userSetProfileImage(
  request: Request,
  response: Response
) {

  const profilePicture = new Profilepicture();
  profilePicture.content = request.body.content;
  profilePicture.user = request.body.user;

  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

  // establish real database connection using our new query runner
  await queryRunner.connect();

  // lets now open a new transaction:
  await queryRunner.startTransaction();

  try {
    //TODO: Remove all the profilepictures from table
    // execute some operations on this transaction:
    await queryRunner.manager.save(profilePicture);

    // commit transaction now:
    await queryRunner.commitTransaction();
  } catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
  } finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
  }
  response.status(200).send();
}
