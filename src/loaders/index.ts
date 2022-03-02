import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from './logger';
import EmailService from '../services/EmailService';

export default async ({expressApp} : {expressApp:any}) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('DB Loaded and connected!')

  const emailSender = new EmailService();
  emailSender.init();
  
  await expressLoader({ app: expressApp });
  Logger.info('Express Loaded')
}
