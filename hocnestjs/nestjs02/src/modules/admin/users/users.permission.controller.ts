import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('admin/users-permission')
export class UsersPermissionController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getPermissionsByUser(@Req() req: any) {
    const id = req.user.id;
    //Lấy được userId từ token
    const userByRole = await this.usersService.getPermissionsByUserRole(+id);
    const permissions = [];
    if (userByRole.roles.length) {
      userByRole.roles.forEach(({ role }) => {
        if (role.permissions.length) {
          role.permissions.forEach(function ({ permission }) {
            if (!permissions.includes(permission.name)) {
              permissions.push(permission.name);
            }
          });
        }
      });
    }

    const userByPermission = await this.usersService.getPermissionsByUser(+id);
    if (userByPermission.permissions.length) {
      userByPermission.permissions.forEach(({ permission }) => {
        if (!permissions.includes(permission.name)) {
          permissions.push(permission.name);
        }
      });
    }
    return permissions;
  }
}
