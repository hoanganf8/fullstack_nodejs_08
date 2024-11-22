// import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/db/prisma.service';
import Hash from 'src/utils/hashing';
// const prisma = new PrismaClient({
//   log: ['query'],
// });
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(body: any) {
    //Logic thêm dữ liệu vào bảng users
    body.created_at = new Date();
    body.updated_at = new Date();
    body.password = Hash.make(body.password);

    return this.prisma.user.create({
      data: body,
    });
  }

  async findAll({ page, limit, sort, order, filter = {} }) {
    const skip = (page - 1) * limit;
    const count = await this.prisma.user.count();
    const rows = await this.prisma.user.findMany({
      skip: skip,
      take: limit,
      where: filter,
      orderBy: {
        [sort]: order,
      },
      include: { Phone: true },
    });
    return { count, rows };
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id: id,
      },
      include: { Phone: true },
    });
  }

  update(id: number, body: any) {
    body.updated_at = new Date();
    return this.prisma.user.update({
      data: body,
      where: {
        id: id,
      },
      include: { Phone: true },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
  findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
  getPosts(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
      include: { posts: true },
    });
  }
  createPosts(body: any, id: number) {
    return this.prisma.user.update({
      data: {
        posts: {
          create: body,
        },
      },
      where: { id },
      include: { posts: true },
    });
  }
  removePosts(id: number) {
    return this.prisma.user.update({
      data: {
        posts: {
          delete: [],
        },
      },
      where: {
        id: id,
      },
    });
  }
}
