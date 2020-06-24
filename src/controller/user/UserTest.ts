import { Request, Response } from 'express';
import {createQueryBuilder, getConnection, getManager, getRepository} from 'typeorm';
import { User } from '../../entity/User';
import {Role} from "../../entity/Role";
import "dotenv"
import {Profilepicture} from "../../entity/Profilepicture";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import {Image} from "../../entity/Image";
import {Comment} from "../../entity/Comment";

export async function userTest(request: Request, response: Response) {
  const data = request.body;
  const userId = 21



  const databaseImage = await getRepository(User)
    .createQueryBuilder("User")
    .leftJoinAndSelect("User.profilePicture", "photo")
    .useTransaction(true)
    .where("User.id = :id", { id: userId })
    .getOne()

  console.log(databaseImage)
  if(databaseImage.profilePicture == null){
    const newProfileIamge = new Profilepicture()
    newProfileIamge.user = await getRepository(User)
      .createQueryBuilder("user")
      .select()
      .where("id = :id", {id: userId})
      .getOne()
    newProfileIamge.content = data.content

    const insertedImage = await getRepository(Profilepicture)
      .createQueryBuilder('Profilepicture')
      .useTransaction(true)
      .insert()
      .into('Profilepicture')
      .values({
        content: "huere figg scheisse",
        user: newProfileIamge.user.id
      })
      .execute()

    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({
        profilePicture: insertedImage.raw[0]
      })
      .where("id = :id", {id: userId})
      .execute()

    response.status(200).json({message:"we did a new one"})
  }else{

    const blah = await getConnection()
      .createQueryBuilder()
      .update(Profilepicture)
      .set({
        content: "data.content"
      })
      .where("id = :id", {id: databaseImage.profilePicture.id})
      .execute()

    response.status(200).json({message: "CHANGE!!!"});
  }

}
