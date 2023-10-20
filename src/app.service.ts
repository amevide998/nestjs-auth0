import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCat(): string {
    return 'Cats say hello!';
  }

  getDog(): string {
    return 'Dogs say hello!';
  }
}
