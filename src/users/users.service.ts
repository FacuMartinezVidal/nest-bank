import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return {
      data: 'All Users',
    };
  }
}
