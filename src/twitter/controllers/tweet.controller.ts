import { Body, Controller, HttpException, HttpStatus, Post,Res } from "@nestjs/common";
import { Response } from "express";
import { InserirTweetDTO } from "../dto/inserir-tweet.dto";
import { TweetService } from "../services/tweet.service";


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
        return response
          .status(HttpStatus.OK)
          .send('Tweet realizado');
      }
    } catch (err) {
      if (err.code == 23505)
        throw new HttpException({ reason: err.detail }, HttpStatus.CONFLICT);
      throw new HttpException({ reason: err }, HttpStatus.BAD_REQUEST);
    }
  }

}
