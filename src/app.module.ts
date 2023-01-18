import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './core/database/database.providers';
import { UsuarioModule } from './usuario/usuario.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [...databaseProviders, AppService],
})
export class AppModule {}