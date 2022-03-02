import config from './config';
import express, { Request, Response, NextFunction } from 'express';
import Logger from './loaders/logger';

async function startServer() {
  const app = express();

  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('DevOps Tool API Alive');
  });

  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, () => {
    Logger.info(`Server Listening on port: ${config.port}`)
  }).on('error', err => {
    Logger.error(err);
    process.exit(1);
  })
}

startServer();
