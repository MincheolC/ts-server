import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { MONGODB_URI } from './util/secrets';
import logger from './util/logger';

// Routers
import indexRouter from './routes';
import userRouter from './routes/user';
import termRouter from './routes/term';
import categoryRouter from './routes/category';

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('Successfully connected to mongoDB'))
  .catch((e) => logger.error('Failed connected to mongoDB ', e));

// Connect to Mysql
createConnection()
  .then(() => logger.info('Successfully connected to mysql'))
  .catch((e) => logger.error('Failed connected to mysql ', e));

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Add Routes
 */
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/terms', termRouter);
app.use('/categories', categoryRouter);

export default app;
