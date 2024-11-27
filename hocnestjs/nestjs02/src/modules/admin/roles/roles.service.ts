import { Injectable } from '@nestjs/common';
import { permission } from 'process';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}
  getRoles() {
    return this.prisma.role.findMany({
      include: {
        permissions: {
          include: { permission: true },
        },
      },
    });
  }
  getRoleById(id: number) {
    return this.prisma.role.findFirst({
      where: { id },
      include: {
        permissions: {
          include: { permission: true },
        },
      },
    });
  }
  async createRole(body: any) {
    const permissionFromBody = await Promise.all(
      body.permissions.map(async (permissionName: string) => {
        let permission = await this.prisma.permission.findFirst({
          where: { name: permissionName },
        });
        if (!permission) {
          permission = await this.prisma.permission.create({
            data: {
              name: permissionName,
              status: true,
              created_at: new Date(),
              updated_at: new Date(),
            },
          });
        }
        return {
          created_at: permission.created_at,
          updated_at: permission.updated_at,
          permission: {
            connect: {
              id: +permission.id,
            },
          },
        };
      }),
    );
    return this.prisma.role.create({
      data: {
        name: body.name,
        status: body.status,
        created_at: new Date(),
        updated_at: new Date(),
        permissions: {
          create: permissionFromBody,
        },
      },
    });
  }
}
