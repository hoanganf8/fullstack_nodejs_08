import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  getUsers(courseId: number) {
    return this.prisma.course.findFirst({
      where: { id: courseId },
      include: {
        users: {
          include: { user: true },
        },
      },
    });
  }
}
