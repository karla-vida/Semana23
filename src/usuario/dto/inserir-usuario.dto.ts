import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UsuarioEntity } from '../entities/usuario.entity';

export class InserirUsuarioDTO {
  @ValidateNested({ each: true })
  @Type(() => UsuarioEntity)
  readonly usuario: UsuarioEntity;
}