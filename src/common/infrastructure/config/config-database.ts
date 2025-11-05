import { DataSource } from 'typeorm';
import 'dotenv/config';

import databaseConfig from '../config/config'; // Importa tu archivo de configuración de NestJS
import * as Entities from '../../domain/entities/entity-index';

const { dbName, port, password, user, host } = databaseConfig();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host,
  port,
  username: user,
  password: password,
  database: dbName,
  synchronize: true,
  logging: false,
  migrations: ['src/common/infrastructure/migrations/*.ts'],
  migrationsTableName: 'migrations',
  entities: Object.values(Entities).filter((e) => typeof e === 'function'),
});
