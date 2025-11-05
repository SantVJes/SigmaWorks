import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  dbName: process.env.NAME_DATABASE,
  port: parseInt(process.env.PORT_DATABASE || '5432', 10),
  password: process.env.PASSWORD_DATABASE,
  user: process.env.USER_DATABASE,
  host: process.env.HOST_DATABASE,
}));
