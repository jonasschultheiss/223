import {Request, Response} from 'express';
import {getManager, getConnection, getRepository} from 'typeorm';
import {User} from '../../entity/User';
import {Profilepicture} from '../../entity/Profilepicture';

export async function userGetProfileImage(
  request: Request,
  response: Response
) {
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();
  const userId = request.params.id;

  const profileImage = await getRepository(Profilepicture)
    .createQueryBuilder('profileImage')
    .setLock('optimistic', 1)
    .select()
    .where('profileImage.user = :id', {id: userId})
    .getOne();
  response.status(200).json(profileImage);
}
