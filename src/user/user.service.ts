import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  getHelloWorld(): { data: string } {
    return {
      data: 'hello world',
    };
  }
  getById(id: string) {
    return {
      id: id,
      data: {
        id: 1,
        name: 'ilman',
      },
    };
  }
}
