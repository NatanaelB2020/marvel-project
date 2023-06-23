import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class Hero {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ example: 'Iron Man' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  favorite: boolean;
}
