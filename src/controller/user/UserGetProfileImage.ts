import {Request, Response} from 'express';
import {getManager, getConnection, getRepository, createQueryBuilder} from 'typeorm';
import {User} from '../../entity/User';
import {Profilepicture} from '../../entity/Profilepicture';

export async function userGetProfileImage(
  request: Request,
  response: Response
) {
  const connection = getConnection();
  const userId = request.params.id;

  const user = await createQueryBuilder("User")
    .leftJoinAndSelect("User.profilePicture", "profilePicture", "profilePicture.id = User.profilePicture")
    .where("User.id = :id", {id: userId})
    .getOne();


  const profileImage = await getRepository(Profilepicture)
    .createQueryBuilder('profileImage')
    .setLock('optimistic', 1)
    .select()
    .where('profileImage.id = :id', {id: user['profilePicture']['id']})
    .getOne();
  response.status(200).json(profileImage);
}
