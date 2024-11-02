import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getUsers() {
    //Gọi model
    return [
      {
        id: 1,
        name: 'John',
        age: 18,
      },
    ];
  }
  async getUser(id: number) {
    return {
      id,
      name: 'John',
      age: 18,
    };
  }
}
