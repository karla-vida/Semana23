import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../entities/usuario.entity';
@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}
}
