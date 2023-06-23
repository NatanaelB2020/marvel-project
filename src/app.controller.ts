import { Controller, Get } from '@nestjs/common';
import { MarvelService } from './marvel/marvel.service'; 

@Controller('characters')
export class AppController {
  constructor(private readonly marvelService: MarvelService) {}

  @Get()
  async getCharacters(): Promise<any> {
    return this.marvelService.getCharacters();
  }
}
