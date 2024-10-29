import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  index() {
    return [
      {
        id: 1,
        name: 'John',
        age: 18,
      },
    ];
  }
  @Get(':id')
  find(@Param('id') userId: string) {
    return {
      id: +userId,
      name: 'John',
      age: 18,
    };
  }
  @Post()
  create(@Body() body: any) {
    return body;
  }
}
