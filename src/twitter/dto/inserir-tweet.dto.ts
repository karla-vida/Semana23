import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { TweetEntity } from '../entities/tweet.entity';

export class InserirTweetDTO {
  @ValidateNested({ each: true })
  @Type(() => TweetEntity)
  readonly tweet: TweetEntity;
}