import { UsuarioService } from './services/usuario.service';
import { usuarioProviders } from './usuario.provider';
import { UsuarioController } from './controllers/usuario.controller';
import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
@Module({
    controllers: [UsuarioController],
    providers: [
      ...databaseProviders,
      ...usuarioProviders,
      UsuarioService,
    ],
  })
  export class UsuarioModule {}