import { ListarTweetDTO } from './../dto/listar-tweet.dto';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { InserirTweetDTO } from '../dto/inserir-tweet.dto';
import { TweetService } from '../services/tweet.service';
import { TweetEntity } from '../entities/tweet.entity';
import { resolve } from 'path';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Post()
  async criar(
    @Body() inserirTweet: InserirTweetDTO,
    @Res() response: Response,
  ): Promise<Response> {
    try {
      const tweet = await this.tweetService.insert(inserirTweet);
      if (tweet) {
        return response.status(HttpStatus.OK).send('Tweet realizado');
      }
    } catch (err) {
      if (err.code == 23505)
        throw new HttpException({ reason: err.detail }, HttpStatus.CONFLICT);
      throw new HttpException({ reason: err }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async listar(@Param() listarTweets: ListarTweetDTO): Promise<TweetEntity[]> {
    try {
      const lista = await  this.tweetService.listarTwittes(listarTweets.id_usuario);
      const arrayFinal: TweetEntity[] = [];
      let contador = 20;
       lista.forEach(item => {
          if(contador>=1) {
            arrayFinal.push(item);
          }
          contador = contador -1;
      });

      return (arrayFinal);
    } catch (error) {
      throw new HttpException(
        { reason: error?.detail },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
