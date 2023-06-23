import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MarvelService } from './marvel/marvel.service'; 

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MarvelService],
})
export class AppModule {}
