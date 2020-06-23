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

  const user = await connection
    .getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.profilePicture", "image")
    .where("user.id = :id", {id: userId})
    .getOne();
  response.status(200).json(user.profilePicture);
}
