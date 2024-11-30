import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Put,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('admin/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  getUsers() {}
  getUserById() {}
  createUser() {}
  updateUser() {}
  removeUser() {}

  @Get(':id/roles')
  getRolesByUser(@Param('id') id: number) {
    return this.usersService.getRolesByUser(+id);
  }
  @Put(':id/roles')
  async updateUserRoles(
    @Param('id') id: number,
    @Body() body: any,
    @Res() res: Response,
  ) {
    //role lấy từ body
    //userId lấy từ params
    if (!body || !Array.isArray(body) || !body.length) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Vui lòng cung cấp role',
      });
    }
    const user = await this.usersService.updateUserRoles(+id, body);
    return res.json(user);
  }
  @Delete(':id/roles')
  deleteUserRoles(@Param('id') id: number) {
    return this.usersService.deleteUserRoles(+id);
  }
  @Get(':id/permissions')
  getPermissionsByUser(@Param('id') id: number) {
    return this.usersService.getPermissionsByUser(+id);
  }
  @Put(':id/permissions')
  async updateUserPermissions(
    @Param('id') id: number,
    @Body() body: any,
    @Res() res: Response,
  ) {
    //role lấy từ body
    //userId lấy từ params
    if (!body || !Array.isArray(body) || !body.length) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Vui lòng cung cấp permission',
      });
    }
    const user = await this.usersService.updateUserPermissions(+id, body);
    return res.json(user);
  }
  @Delete(':id/permissions')
  deleteUserPermissions(@Param('id') id: number) {
    return this.usersService.deleteUserPermissions(+id);
  }
}
