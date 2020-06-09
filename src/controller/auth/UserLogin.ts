import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {User} from '../../entity/User';

export async function userLogin(request: Request, response: Response) {

    //TODO: Refactor with Transaction from typeORM
    //https://typeorm.io/#/transactions
    const sentUser = request.body.username;
    const clearPassword = request.body.password;
    const databaseUser = await getManager()
        .createQueryBuilder()
        .select("user")
        .from(User, "user")
        .where("user.name = :name", {name: sentUser})
        .getOne()



    const bcrypt = require("bcrypt")
    if ( databaseUser === null ){
        response.status(200).json({message: "User not found"})
    }

    if(bcrypt.compare(clearPassword, databaseUser.password)) {
        try {
            //const hashedPassword = await bcrypt.hash(data.password, 10)
            //await getManager()
               // .createQueryBuilder()
               // .insert()
               // .into(User)
               // .values({username: data.username, password: hashedPassword})
               // .execute();

            response.status(203).json({message: "Welcome, you are logged in"})
        } catch {
            response.status(500).json({message: "There are some errors"})
        }
    }else{
        response.status(200).json({message: "Username or Password wrong"})
    }
}