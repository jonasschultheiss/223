import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { User } from '../../entity/User';
import {Role} from "../../entity/Role";
import "dotenv"
import {Profilepicture} from "../../entity/Profilepicture";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export async function userTest(request: Request, response: Response) {
  const connection = getConnection();


  response.status(200).json()


}
