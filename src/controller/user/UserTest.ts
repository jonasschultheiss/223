import { Request, Response } from 'express';
import {createQueryBuilder, getConnection} from 'typeorm';
import { User } from '../../entity/User';
import {Role} from "../../entity/Role";
import "dotenv"
import {Profilepicture} from "../../entity/Profilepicture";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import {Image} from "../../entity/Image";

export async function userTest(request: Request, response: Response) {
  const connection = getConnection();

  const test = await connection
    .getRepository(Profilepicture)
    .createQueryBuilder("profilePicture")
    .select()
    .where("profilePicture.user = :id", {id: 17})
    .getOne()
  response.status(200).json(test)


}
