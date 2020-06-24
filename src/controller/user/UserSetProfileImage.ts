import {Request, Response, query} from 'express';
import {createQueryBuilder, getManager, getRepository} from 'typeorm';
import {getConnection} from 'typeorm';
import {User} from '../../entity/User';
import {Profilepicture} from '../../entity/Profilepicture';
import {CLIENT_RENEG_LIMIT} from 'tls';
export async function userSetProfileImage(
  request: Request,
  response: Response
) {

  const data = request.body;
  const userId = data.userId
  const content = data.text



// get a connection and create a new query runner
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

// establish real database connection using our new query runner
  await queryRunner.connect();

// lets now open a new transaction:
  await queryRunner.startTransaction();
  const imageToUpdate = await queryRunner.manager
    .getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.profilePicture", "photo")
    .useTransaction(true)
    .where("user.id = :id", { id: userId })
    .getOne()


  try {

    // execute some operations on this transaction:

    if (imageToUpdate.profilePicture)
    {
      imageToUpdate.profilePicture.content = content
      await queryRunner.manager.update(Profilepicture,{id: imageToUpdate.profilePicture.id, lock: 'optimistic'}, imageToUpdate.profilePicture);
    }else{
      imageToUpdate.profilePicture = new Profilepicture()
      imageToUpdate.profilePicture.content = content
      await queryRunner.manager.save(Profilepicture, imageToUpdate.profilePicture);
      await queryRunner.manager.save(User, imageToUpdate);
    }

    // commit transaction now:
    await queryRunner.commitTransaction();
    response.status(200).json()
  } catch (err) {

    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
    response.status(400).json(err)
  } finally {

    // you need to release query runner which is manually created:
    await queryRunner.release();
  }

}
