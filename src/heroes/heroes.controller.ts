import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MarvelService } from 'src/marvel/marvel.service'; 
import { Hero } from 'src/entity/hero.entity'; 

@Controller('heroes')
@ApiTags('Heroes')
export class HeroesController {
  private readonly heroes: Hero[] = [];

  constructor(private readonly marvelService: MarvelService) {}

  @Get(':name')
  async searchHeroes(@Param('name') name: string): Promise<Hero[]> {
    const marvelHeroes = await this.marvelService.searchHeroesByName(name);
    return marvelHeroes.map((marvelHero) => ({
      id: marvelHero.id,
      name: marvelHero.name,
      favorite: false,
    }));
  }

  @Post(':id/favorite')
  markAsFavorite(@Param('id') id: number): boolean {
    const hero = this.findHeroById(id);
    if (hero) {
      hero.favorite = true;
      return true;
    }
    return false;
  }

  @Patch(':id/unfavorite')
  unmarkAsFavorite(@Param('id') id: number): boolean {
    const hero = this.findHeroById(id);
    if (hero) {
      hero.favorite = false;
      return true;
    }
    return false;
  }

  @Get('favorites')
  getFavoriteHeroes(): Hero[] {
    return this.heroes.filter((hero) => hero.favorite);
  }

  private findHeroById(id: number): Hero {
    return this.heroes.find((hero) => hero.id === id);
  }
}
