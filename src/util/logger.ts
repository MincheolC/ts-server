import winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, timestamp, colorize, errors, splat, simple } = format;

/*
 *  winston's finalizing formats (json, logstash, prettyPrint, simple, etc);
 *  if you wanna change printing format change "simple()" to what you want.
 */
const options: winston.LoggerOptions = {
  levels: winston.config.npm.levels,
  format: combine(
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    splat(),
    simple()
  ),
  transports: [
    new transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    }),
  ],
};

const logger = createLogger(options);

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}
export default logger;
