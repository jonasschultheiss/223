import {Request, Response, query} from 'express';
import {createQueryBuilder, getManager} from 'typeorm';
import {getConnection} from 'typeorm';
import {User} from '../../entity/User';
import {Profilepicture} from '../../entity/Profilepicture';
import {CLIENT_RENEG_LIMIT} from 'tls';
export async function userSetProfileImage(
  request: Request,
  response: Response
) {


  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

  // establish real database connection using our new query runner
  await queryRunner.connect();

  //const user = await queryRunner.manager.findOne(User, {where: {id: request.body.user}})
 const user = await createQueryBuilder("User")
   .leftJoinAndSelect("User.profilePicture", "profilePicture", "profilePicture.id = User.profilePicture")
   .where("User.id = :id", {id: request.body.user})
   .getOne();


  //const profilePicture = await queryRunner.manager.findOne(Profilepicture, {where:{id: user.profilePicture.id}})


  //let profilePicture = await queryRunner.manager.findOne(Profilepicture, {where:{id: user['profilePicture:']['id']}}) ||
  const profilePicture = new Profilepicture()

  //profilePicture.user = request.body.user;
  // lets now open a new transaction:
  await queryRunner.startTransaction();

  const databasePicture = await queryRunner.manager.getRepository(Profilepicture)
    .createQueryBuilder("profilePicture")
    .select()
    .where("profilePicture.id = :id", { id: user['profilePicture']['id'] })
    .getOne();

  try {
    if (databasePicture){
      await queryRunner.manager.getRepository(Profilepicture)
        .createQueryBuilder("profilePicture")
        .useTransaction(true)
        .update()
        .set({
          content: request.body.content
        })
        .where("profilePicture.id = :id", { id: user['profilePicture']['id'] })
        .execute();

    }else{
      profilePicture.content = request.body.content
      await queryRunner.manager.save(profilePicture);
    }


    // commit transaction now:
    await queryRunner.commitTransaction();
    response.status(200).json({message: "success"});
  } catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
    response.status(500).json({message: "something went wrong!"})
  } finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
  }

}
