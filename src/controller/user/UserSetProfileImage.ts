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
  const content = data.content


  const databaseImage = await getRepository(User)
    .createQueryBuilder("User")
    .leftJoinAndSelect("User.profilePicture", "photo")
    .useTransaction(true)
    .where("User.id = :id", { id: userId })
    .getOne()


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
        content: content,
        user: newProfileIamge.user.id
      })
      .execute()
    console.log(insertedImage)
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
    console.log(databaseImage)
    const blah = await getConnection()
      .createQueryBuilder()
      .update(Profilepicture)
      .set({
        content: data.content
      })
      .where("id = :id", {id: databaseImage.profilePicture.id})
    response.status(200).json({message: "CHANGE!!!"});
  }

}
