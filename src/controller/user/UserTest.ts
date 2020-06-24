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
  const page = request.query.page || 1
  const skip = (request.query.page === "1" ) ? 0 :Number(page) * 10

  const test = await getManager()
    .createQueryBuilder()
    .setLock('optimistic', 1)
    .insert()
    .into(Image)
    .values({
      title: "data.text",
      content: "data.imageText",
      user: data.userId,
    })
    .execute();

  response.status(200).json(test.identifiers[0].id);

}
