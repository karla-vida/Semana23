import { UsuarioEntity } from './../../usuario/entities/usuario.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InserirTweetDTO } from '../dto/inserir-tweet.dto';
import { TweetEntity } from '../entities/tweet.entity';

@Injectable()
export class TweetService {
  constructor(
    @Inject('TWEET_REPOSITORY')
    private tweetRepository: Repository<TweetEntity>,
  ) {}

  async insert(tweetDTO: InserirTweetDTO): Promise<TweetEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const tweet = tweetDTO.tweet;
        const response = await this.tweetRepository.save(tweet);
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

  async listarTwittes(userId: number): Promise<TweetEntity[]> {
    const user = new UsuarioEntity();
    user.id_usuario = userId;
    return new Promise(async (resolve, reject) => {
    
      try {
        
          resolve(
            await (await this.tweetRepository.findBy({  usuario: user })).
            sort((a,b)=> b.id_tweet - a.id_tweet),
          );
        
       
      } catch (error) {
        reject(error);
      }
  }


  )}
}

