import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { User } from '../../entity/User';
import {Role} from "../../entity/Role";
import "dotenv"

import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export async function userTest(request: Request, response: Response) {
  const user = new User();

  user.username = request.body.username;
  user.password = await bcrypt.hash(request.body.password, 10)


  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

  // establish real database connection using our new query runner
  await queryRunner.connect();

  const databaseUser = await queryRunner.manager.find(User, {where: {username: user.username}})
  const userRole = await queryRunner.manager.find(Role, {where:{id:1}})
  user.role = userRole.find((role)=>{
    return role.id === 1;
  })
  //const defaultProfilePicture = await queryRunner.manager.find(Profilepicture, {where:{id:1}})
  //user.profilePicture = defaultProfilePicture
  //console.log(user)

  // lets now open a new transaction:
  await queryRunner.startTransaction();
  if (Object.keys(databaseUser).length !== 0){
    response.status(500).send("Username taken")
    return
  }else {
    try {
      // execute some operations on this transaction:
      await queryRunner.manager.save(user);
      // commit transaction now:
      await queryRunner.commitTransaction();

    } catch (err) {
      // since we have errors let's rollback changes we made
      await queryRunner.rollbackTransaction();
      response.status(500).send()
      return
    }

    const createdUser = await queryRunner.manager.findOne(User, {where:{username: user.username}})

    createdUser.role = userRole.find((role)=>{
      return role.id === 1;
    })
    createdUser.profilePicture = null;

    const payload = {
      userId: createdUser.id,
      username: createdUser.username,
      role: createdUser.role.name,
      profilePicture: []
    }

    const token_secret = process.env.JWT_SECRET || "abcdefghijklmnopqrstuvwxyz"

    const token = jwt.sign(JSON.stringify(payload),token_secret)

    response.status(200).json({message:"new account created", access_token: token});
    // you need to release query runner which is manually created:
    await queryRunner.release();


  }

}
