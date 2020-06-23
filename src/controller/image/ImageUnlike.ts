import {Request, Response} from 'express';
import {getConnection, getManager} from 'typeorm';
import {Like} from '../../entity/Like';

export async function imageUnlike(request: Request, response: Response) {

  const data = request.body;


  // get a connection and create a new query runner
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

// establish real database connection using our new query runner
  await queryRunner.connect();

// lets now open a new transaction:
  await queryRunner.startTransaction();

  try {

    // execute some operations on this transaction:
    await queryRunner.manager.delete(Like, {where: {image: data.imageId}, and: {user: data.userId}});

    // commit transaction now:
    await queryRunner.commitTransaction();
    response.status(203).json({message: "Image unliked"});
  } catch (err) {

    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
    response.status(500).json({message: "Unliking image failed"});
  } finally {

    // you need to release query runner which is manually created:
    await queryRunner.release();
  }

}
