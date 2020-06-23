import {Request, Response} from 'express';
import {getConnection, getManager} from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import "dotenv"
import {User} from '../../entity/User';
import {Profilepicture} from "../../entity/Profilepicture";


export async function userLogin(request: Request, response: Response) {

  const sentUser = request.body.username;
  const clearPassword = request.body.password;

  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

  // establish real database connection using our new query runner
  await queryRunner.connect();

  const databaseUser = await queryRunner.manager.findOne(User, {where: {username: sentUser}})

  if (bcrypt.compare(clearPassword, databaseUser.password)){
    const userData = await connection
        .getRepository(User)
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.role", "role")
        .where("username = :name", {name: sentUser})
        .getOne()
    const profilePicture = await connection
      .getRepository(Profilepicture)
      .createQueryBuilder("profilePicture")
      .select()
      .where("profilePicture.id = :id", {id: userData.profilePicture.id})
      .getOne()
    const payload = {
      userId: userData.id,
      username: userData.username,
      role: userData.role.name,
      profilePicture: profilePicture ? profilePicture.content : []
    }

    const token_secret = process.env.JWT_SECRET || "abcdefghijklmnopqrstuvwxyz"

    const token = jwt.sign(JSON.stringify(payload),token_secret)

    response.status(200).json({success: true, message:"Login success", access_token: token});

  }else{
    response.status(200).json({success: false, message:"Login failed"});
  }
  await queryRunner.release()
}
