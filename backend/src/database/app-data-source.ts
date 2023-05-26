import dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config({ path: `${process.cwd()}/${process.env.NODE_ENV}.env` });

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${process.cwd()}/dist/modules/*/*.entity.js`],
  migrations: [`${process.cwd()}/dist/database/migrations/*.js`],
  logging: false,
  synchronize: false,
  migrationsRun: true
};

export const PostgresDataSource = new DataSource(typeOrmConfig);
