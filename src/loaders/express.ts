import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from '../api';
import config from '../config';

export default ({ app }: {app: express.Application }) => {
    app.use(cors())
    app.use(config.api.prefix, routes());

    app.use((req: Request, res: Response, next: NextFunction) => {
        const err: any = new Error('Not Found');
        err['status'] = 404;
        next(err);
    })
}