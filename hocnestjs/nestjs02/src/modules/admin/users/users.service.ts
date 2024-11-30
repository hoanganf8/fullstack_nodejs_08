import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  getRolesByUser(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
      include: {
        roles: {
          include: { role: true },
        },
      },
    });
  }
  updateUserRoles(id: number, body: any) {
    const dataUpdate = body.map((roleId: number) => {
      return {
        created_at: new Date(),
        updated_at: new Date(),
        role: {
          connect: {
            id: roleId,
          },
        },
      };
    });

    return this.prisma.user.update({
      where: { id },
      data: {
        roles: {
          deleteMany: {},
          create: dataUpdate,
        },
      },
    });
  }

  deleteUserRoles(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: {
        roles: {
          deleteMany: {},
        },
      },
    });
  }
  getPermissionsByUser(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
      include: {
        permissions: {
          include: { permission: true },
        },
      },
    });
  }
  updateUserPermissions(id: number, body: any) {
    const dataUpdate = body.map((permissionId: number) => {
      return {
        created_at: new Date(),
        updated_at: new Date(),
        permission: {
          connect: {
            id: permissionId,
          },
        },
      };
    });
    return this.prisma.user.update({
      where: { id },
      data: {
        permissions: {
          deleteMany: {},
          create: dataUpdate,
        },
      },
    });
  }
  deleteUserPermissions(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: {
        permissions: {
          deleteMany: {},
        },
      },
    });
  }

  //Lấy danh sách permissions của user theo role
  getPermissionsByUserRole(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
