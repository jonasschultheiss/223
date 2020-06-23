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

export async function imageGetLikeCount(request: Request, response: Response) {

  const likes = await createQueryBuilder("Like")
    .leftJoinAndSelect("Like.user", "user")
    .where("Like.image = :id",{id: request.params.id})
    .getMany()

  response.status(200).json(likes)


}