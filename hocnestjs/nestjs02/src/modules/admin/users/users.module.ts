import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/db/prisma.service';
import { UsersPermissionController } from './users.permission.controller';

@Module({
  controllers: [UsersController, UsersPermissionController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
