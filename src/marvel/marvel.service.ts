import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';

@Injectable()
export class MarvelService {
  private publicKey: string = '1f9f758e09ab2d8666987df7e1d222fc';
  private privateKey: string = '7852fb1004aaefcc0e6485d4df106757b9a9357b';
  private apiUrl: string = 'https://gateway.marvel.com/v1/public';

  async searchHeroesByName(name: string): Promise<any[]> {
    const url = `${this.apiUrl}/characters`;
    const timestamp = new Date().getTime().toString();
    const hash = this.generateHash(timestamp);

    const params = {
      apikey: this.publicKey,
      ts: timestamp,
      hash: hash,
      nameStartsWith: name,
    };

    try {
      const response = await axios.get(url, { params });
      return response.data.data.results;
    } catch (error) {
      console.error('Erro ao buscar heróis da Marvel:', error);
      throw error;
    }
  }

  async getCharacters(): Promise<any> {
    const url = `${this.apiUrl}/characters`;
    const timestamp = new Date().getTime().toString();
    const hash = this.generateHash(timestamp);

    const params = {
      apikey: this.publicKey,
      ts: timestamp,
      hash: hash,
    };

    try {
      const response = await axios.get(url, { params });
      return response.data.data.results;
    } catch (error) {
      console.error('Erro ao buscar personagens da Marvel:', error);
      throw error;
    }
  }

  private generateHash(timestamp: string): string {
    const hash = crypto.createHash('md5');
    hash.update(timestamp + this.privateKey + this.publicKey);
    return hash.digest('hex');
  }
}
