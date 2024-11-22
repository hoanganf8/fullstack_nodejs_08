import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class PhonesService {
  constructor(private prisma: PrismaService) {}
  getPhoneByUserId(userId: number) {
    return this.prisma.phone.findFirst({
      where: {
        user_id: userId,
      },
    });
  }
  findOne(id: number) {
    return this.prisma.phone.findFirst({
      where: { id },
      include: {
        user: true,
      },
    });
  }
  create(phone: any) {
    phone.created_at = new Date();
    phone.updated_at = new Date();

    return this.prisma.phone.create({
      data: phone,
    });
  }
  deleteByUserId(userId: number) {
    return this.prisma.phone.delete({
      where: {
        user_id: userId,
      },
    });
  }
}
