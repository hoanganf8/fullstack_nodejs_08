import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { Response } from 'express';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  @Get()
  getRoles() {
    return this.rolesService.getRoles();
  }
  @Get(':id')
  getRoleById(@Param('id') id: number) {
    return this.rolesService.getRoleById(+id);
  }
  @Post()
  async createRole(
    @Body() { name, status, permissions }: any,
    @Res() res: Response,
  ) {
    if (!name) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Vui lòng nhập name',
      });
    }
    let permissionData = [];
    if (permissions && Array.isArray(permissions)) {
      permissionData = permissions;
    }
    const role = await this.rolesService.createRole({
      name,
      status,
      permissions: permissionData,
    });
    return res.status(HttpStatus.OK).json({ success: true, data: role });
  }
}
