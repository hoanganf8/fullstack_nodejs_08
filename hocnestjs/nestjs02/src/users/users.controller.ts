import { z } from 'zod';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PhonesService } from 'src/modules/phones/phones.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly phoneService: PhonesService,
  ) {}

  @Post()
  async create(@Body() body: CreateUserDto, @Res() res) {
    //Validate
    const schema = z.object({
      name: z
        .string({
          required_error: 'Tên bắt buộc phải nhập',
        })
        .min(4, 'Tên phải từ 4 ký tự'),
      email: z
        .string({
          required_error: 'Email bắt buộc phải nhập',
        })
        .email('Email không đúng định dạng')
        .refine(async (email) => {
          const user = await this.usersService.findByEmail(email);
          return !user;
        }, 'Email đã có người sử dụng'),
      password: z
        .string({
          required_error: 'Mật khẩu bắt buộc phải nhập',
        })
        .min(6, 'Mật khẩu phải từ 6 ký tự'),
      phone: z.string({
        required_error: 'Số điện thoại bắt buộc phải nhập',
      }),
    });
    const validatedFields = await schema.safeParseAsync(body);
    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors;
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        errors,
        message: 'Validate failed',
      });
    }
    const data = await this.usersService.create({
      name: body.name,
      email: body.email,
      password: body.password,
      Phone: {
        create: {
          phone: body.phone,
          created_at: new Date(),
          updated_at: new Date(),
        },
      },
    });

    // await this.phoneService.create({
    //   phone: body.phone,
    //   user_id: +data.id,
    // });
    return res.status(HttpStatus.CREATED).json(data);
  }

  @Get()
  async findAll(@Query() query) {
    const {
      _page = 1,
      _limit = 3,
      _order = 'asc',
      _sort = 'id',
      filter_status,
      filter_name,
      filter_email,
      email_like,
      name_like,
      q,
    } = query;
    const filter = {} as {
      [key: string]: string | boolean | object;
    };
    if (filter_status) {
      filter.status = filter_status === 'true';
    }
    if (filter_name) {
      filter.name = filter_name;
    }
    if (filter_email) {
      filter.email = filter_email;
    }
    if (email_like) {
      filter.email = {
        contains: email_like,
        mode: 'insensitive',
      };
    }
    if (name_like) {
      filter.name = {
        contains: name_like,
        mode: 'insensitive',
      };
    }
    if (q) {
      filter.OR = [
        {
          name: {
            contains: q,
            mode: 'insensitive',
          },
        },
        {
          email: {
            contains: q,
            mode: 'insensitive',
          },
        },
      ];
    }
    const { count, rows } = await this.usersService.findAll({
      page: +_page,
      limit: +_limit,
      sort: _sort,
      order: _order,
      filter,
    });
    // const userList = await Promise.all(
    //   rows.map(async (user: any) => {
    //     const phoneRow = await this.phoneService.getPhoneByUserId(user.id);
    //     // console.log(phone);
    //     user.phone = phoneRow.phone;
    //     //Gọi truy vấn tới bảng phone để lấy số điện theo user_id

    //     return user;
    //   }),
    // );
    //Query n + 1
    return {
      count,
      currentPage: +_page,
      data: rows,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    // const user = await this.usersService.findOne(+id);
    const dataUpdate: any = {};
    if (body.name) {
      dataUpdate.name = body.name;
    }
    if (body.email) {
      dataUpdate.email = body.email;
    }
    if (body.password) {
      dataUpdate.password = body.password;
    }
    if (body.phone) {
      dataUpdate.Phone = {
        update: {
          phone: body.phone,
        },
      };
    }
    return this.usersService.update(+id, dataUpdate);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // await this.phoneService.deleteByUserId(+id);
    await this.usersService.update(+id, {
      Phone: {
        delete: true,
      },
    });
    return this.usersService.remove(+id);
  }
  @Get(':id/posts')
  getPosts(@Param('id') id: number) {
    return this.usersService.getPosts(+id);
  }
  @Post(':id/posts')
  createPosts(@Body() body: any, @Param('id') id: number) {
    if (Array.isArray(body)) {
      body = body.map((item) => {
        item.created_at = new Date();
        item.updated_at = new Date();
        return item;
      });
    } else {
      body.created_at = new Date();
      body.updated_at = new Date();
    }

    return this.usersService.createPosts(body, +id);
  }

  @Delete(':id/posts')
  removePosts(@Param('id') id: number) {
    return this.usersService.removePosts(+id);
  }
}
