import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {Request, Response} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {AppRoutes} from './routes';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

dotenv.config();

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(async connection => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    // register all application routes
    AppRoutes.forEach(route => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch(err => next(err));
        }
      );
    });

    const port = process.env.PORT || 3000;

    app.listen(port);

    console.log(`Express application is up and running on port ${port}`);
  })
  .catch(error => console.log('TypeORM connection error: ', error));
