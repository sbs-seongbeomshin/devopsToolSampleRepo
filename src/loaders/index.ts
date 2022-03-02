import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from './logger';

export default async ({expressApp} : {expressApp:any}) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('DB Loaded and connected!')

  await expressLoader({ app: expressApp });
  Logger.info('Express Loaded')
}
