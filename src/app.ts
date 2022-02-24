import config from './config';
import express, { Request, Response, NextFunction } from 'express';

async function startServer() {
    const app = express();

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send('DevOps Tool API Alive');
    });

    await require('./loaders').default({ expressApp: app });

    app.listen(config.port, () => {
        console.log('hi')
    }).on('error', err => {
        console.log(err);
        process.exit(1);
    })
}

startServer();
