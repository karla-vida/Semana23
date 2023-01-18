import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../entities/usuario.entity';
import { InserirUsuarioDTO } from '../dto/inserir-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async insert(usuarioDTO: InserirUsuarioDTO): Promise<UsuarioEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const usuario = usuarioDTO.usuario;
        const response = await this.usuarioRepository.save(usuario);
        resolve(response);
      } catch (error) {
        console.log('-- insert error --');
        console.log(error);
        reject({
          code: error.code,
          detail: error.detail,
        });
      }
    });
  }
}
