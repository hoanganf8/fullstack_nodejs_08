import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/db/prisma.service';
import { PhonesService } from 'src/modules/phones/phones.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, PhonesService],
})
export class UsersModule {}
