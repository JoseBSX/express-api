import dotenv from 'dotenv-flow';
import express, { json } from 'express';

import indexHandler from './handlers/home/index.mjs';
import {
  apiOutput,
  authToken,
  internalError,
  logger,
  mongodb,
  notFound,
  requestId,
} from './middlewares/index.mjs';
import { authRoutes, usersRoutes } from './routes/index.mjs';

// Configure
dotenv.config();
const app = express();
const { PORT = 3000 } = process.env;

// Before request middlewares
app.use(
  json(),
  mongodb,
  requestId,
  logger,
  apiOutput,
);

// Routes
app.get('/', indexHandler);
app.use('/auth', authRoutes);
app.use('/users', authToken, usersRoutes);

// After request middlewares
app.use(notFound, internalError);

// Start
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
