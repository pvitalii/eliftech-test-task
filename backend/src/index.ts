import 'dotenv/config';
import Express, { json, urlencoded } from 'express';
import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { PostgresDataSource } from './database/app-data-source';
import { appRouter } from './app-router';
import { errorHandler } from './middlewares/error-handler';

PostgresDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

const app = Express();

app
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(cookieParser())
  .use(cors({ origin: process.env.CLIENT, credentials: true }))
  .use(Express.static(`${process.cwd()}/src/static`));

app.use(appRouter);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
