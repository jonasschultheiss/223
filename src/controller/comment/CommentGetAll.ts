import {Request, Response} from 'express';
import {getManager, getRepository} from 'typeorm';
import {Comment} from "../../entity/Comment";

export async function commentGetAll(request: Request, response: Response){
    const comments = await getRepository(Comment)
        .createQueryBuilder("comment")
        .getMany();
    response.set(comments).status(200);
}