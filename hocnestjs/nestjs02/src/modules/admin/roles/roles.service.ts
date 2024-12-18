import { Injectable } from '@nestjs/common';
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

  async updateRole(body: any, id: number) {
    let permissionFromBody = null;
    if (
      body.permissions &&
      Array.isArray(body.permissions) &&
      body.permissions.length
    ) {
      permissionFromBody = await Promise.all(
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
    }

    const dataUpdate: any = {
      updated_at: new Date(),
    };
    if (body.name) {
      dataUpdate.name = body.name;
    }
    dataUpdate.status = body.status ? true : false;
    if (permissionFromBody) {
      dataUpdate.permissions = {
        deleteMany: {},
        create: permissionFromBody,
      };
    }

    return this.prisma.role.update({
      where: {
        id,
      },
      data: dataUpdate,
    });
  }
  async deleteRole(id: number) {
    await this.prisma.role.update({
      where: {
        id,
      },
      data: {
        permissions: {
          deleteMany: {},
        },
      },
    });
    return this.prisma.role.delete({
      where: { id },
    });
  }
}
