import { twitterProviders } from './twitter.provider';
import { TweetController } from './controllers/tweet.controller';
import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { TweetService } from './services/tweet.service';
@Module({
    controllers: [TweetController],
    providers: [
      ...databaseProviders,
      ...twitterProviders,
      TweetService,
    ],
  })
  export class TwitterModule {}