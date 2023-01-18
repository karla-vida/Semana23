import { DataSource } from 'typeorm';
import { UsuarioEntity } from './entities/usuario.entity';
export const usuarioProviders = [
    {
      provide: 'USUARIO_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(UsuarioEntity),
      inject: ['DATA_SOURCE'],
    },
  ];