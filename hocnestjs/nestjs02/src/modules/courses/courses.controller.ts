import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('/:id/users')
  getUsers(@Param('id') id: number) {
    return this.coursesService.getUsers(+id);
  }
}
