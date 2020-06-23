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
  const profilePicture = await queryRunner.manager.findOne(Profilepicture, {where:{user: request.body.user}})
  const user = await queryRunner.manager.findOne(User, {where: {id: request.body.user}})



  //const profilePicture = await queryRunner.manager.findOne(Profilepicture, {where:{user: request.body.user}}) || new Profilepicture()

  //profilePicture.content = request.body.content;
  //profilePicture.user = request.body.user;
  // lets now open a new transaction:
  await queryRunner.startTransaction();


  console.log(profilePicture)
  try {
    if (profilePicture){
      await queryRunner.manager.update(Profilepicture, { where: {user:  request.body.user}}, profilePicture);

    }else{
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
