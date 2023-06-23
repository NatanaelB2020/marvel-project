import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto-js';

@Injectable()
export class MarvelService {
  private readonly publicKey = '1f9f758e09ab2d8666987df7e1d222fc';
  private readonly privateKey = '7852fb1004aaefcc0e6485d4df106757b9a9357b';
  private readonly apiUrl = 'https://gateway.marvel.com/v1/public';

  async getCharacters(): Promise<any> {
    const timestamp = new Date().getTime().toString();
    const hash = crypto
      .MD5(timestamp + this.privateKey + this.publicKey)
      .toString();

    const response = await axios.get(`${this.apiUrl}/characters`, {
      params: {
        ts: timestamp,
        apikey: this.publicKey,
        hash: hash,
      },
    });

    return response.data;
  }
}
