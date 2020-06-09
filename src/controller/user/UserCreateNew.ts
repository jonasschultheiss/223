import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {User} from '../../entity/User';

export async function userCreateNew(request: Request, response: Response) {

  //TODO: Refactor with Transaction from typeORM
  //https://typeorm.io/#/transactions
  const data = request.body
  const bcrypt = require("bcrypt")
  console.log("data 123")
  const databaseUser = await getManager()
      .createQueryBuilder()
      .select("username")
      .from(User, "user")
      .where("user.username = :name", {name: data.username})
      .getOne();


  if ( databaseUser !== null ){
    response.status(200).json({message: "Username already taken"})
    return

  }
  try{
    const hashedPassword = await bcrypt.hash(data.password, 10)
    await getManager()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({username: data.username, password: hashedPassword})
        .execute();

    response.status(203).json({"message": "Login success"})
    return

  }catch{
    response.status(500).json({"message": "There was an error"})
    return

  }

}
