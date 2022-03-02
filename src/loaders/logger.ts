import { transports, format, createLogger, config, LoggerOptions } from 'winston';
import appConfig from '../config';

const transportsArray = [];
if(process.env.NODE_ENV !== 'development') {
  transportsArray.push(
    new transports.Console()
  ) 
} else {
  transportsArray.push(
    new transports.Console({
      format: format.combine(
        format.cli(),
        format.splat(),
      )    
    })        
  )
}

const LoggerInstance = createLogger({
  level: appConfig.logs.level,
  levels: config.npm.levels,
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true}),
    format.splat(),
    format.json()
  ),
  transports: transportsArray
} as LoggerOptions); 

export default LoggerInstance;
