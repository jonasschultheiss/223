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


  const postId = request.params.id
  const connection = getConnection()
  const comments = await connection
    .getRepository(Comment)
    .createQueryBuilder('comment')
    .leftJoinAndSelect("comment.user", "user")
    .where(
      "comment.user=:id", {id: 17}
    )
    //can't setLock Optimistic with get Many
    .getMany();
  response.status(200).json(comments);


}
