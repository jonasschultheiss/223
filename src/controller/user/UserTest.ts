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
  const page = Number(request.query.page) || 1
  const skip = (page === 1) ? 0 : Number(page-1) * 10

  const images = await createQueryBuilder("Image")
    .leftJoinAndSelect("Image.user", "user")
    .leftJoinAndSelect("Image.like", "like")
    .offset(skip)
    .limit(10)
    .orderBy("Image.updateDate" , "DESC")
    .getMany();

  response.status(200).json(images);
}
