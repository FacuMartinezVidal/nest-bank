import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [
    {
      id: 1,
      username: 'test',
      email: 'test@test.com',
    },
  ];

  findAll() {
    return {
      data: 'All Users',
    };
  }

  findById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
