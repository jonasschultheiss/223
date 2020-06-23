import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { User } from '../../entity/User';
import {Role} from "../../entity/Role";
import "dotenv"
import {Profilepicture} from "../../entity/Profilepicture";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export async function userTest(request: Request, response: Response) {

  if(request.body.roleId && request.body.userId){
    const roleId = request.body.roleId
    const userId = request.body.userId

    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({
        role: roleId
      })
      .where("id = :id", { id: userId })
      .execute();
    response.status(200).json({message: "userrole set"})
  }else{
    response.status(500).json({message: "failed to set user role"})
  }


}
