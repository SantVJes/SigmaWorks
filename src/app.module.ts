import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import databaseConfig from './common/infrastructure/config/config';
import { enviroments } from './common/infrastructure/config/enviroments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[
        process.env.NODE_ENV ?? 'dev'
      ] as keyof typeof enviroments,
      load: [databaseConfig],
      isGlobal: true,
      validationSchema: Joi.object({
        URL_DATABASE: Joi.string().required(),
        HOST_DATABASE: Joi.string().required(),
        PORT_DATABASE: Joi.number().required(),
        PASSWORD_DATABASE: Joi.string().required(),
        USER_DATABASE: Joi.string().required(),
        NAME_DATABASE: Joi.string().required(),
      }),
      // hace que esté disponible en todos los módulos,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
