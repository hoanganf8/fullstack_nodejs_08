import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [PhonesController],
  providers: [PhonesService, PrismaService],
})
export class PhonesModule {}
