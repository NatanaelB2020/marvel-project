import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarvelService } from './marvel/marvel.service'; 
import { HeroesController } from './heroes/heroes.controller'; 

@Module({
  imports: [],
  controllers: [AppController, HeroesController],
  providers: [AppService, MarvelService], // Adicione o MarvelService aos providers
})
export class AppModule {}
