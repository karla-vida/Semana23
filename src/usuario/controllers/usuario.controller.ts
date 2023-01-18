import { Body, Controller, HttpException, HttpStatus, Post,Res } from "@nestjs/common";
import { Response } from "express";
import { InserirUsuarioDTO } from "../dto/inserir-usuario.dto";
import { UsuarioService } from "../services/usuario.service";

@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}
  
  @Post()
  async criar(
    @Body() inserirUsuario: InserirUsuarioDTO,
    @Res() response: Response,
  ): Promise<Response> {
    try {
      const usuario = await this.usuarioService.insert(inserirUsuario);
      if (usuario) {
        return response
          .status(HttpStatus.OK)
          .send('Usuário cadastrado com sucesso');
      }
    } catch (err) {
      if (err.code == 23505)
        throw new HttpException({ reason: err.detail }, HttpStatus.CONFLICT);
      throw new HttpException({ reason: err }, HttpStatus.BAD_REQUEST);
    }
  }

}
