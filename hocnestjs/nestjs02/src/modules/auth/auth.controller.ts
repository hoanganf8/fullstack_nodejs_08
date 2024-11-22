import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { LoginDto } from './dto/loginDto';
import { Response } from 'express';
import { AuthService } from './auth.service';
import Hash from 'src/utils/hashing';
import JWT from 'src/utils/jwt';
import { redis } from 'src/utils/redis';
import { sendMail } from 'src/utils/mail';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() { email, password }: LoginDto, @Res() res: Response) {
    if (!email || !password) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Vui lòng nhập email và password',
      });
    }
    const user = await this.authService.getUserByField('email', email);
    if (!user) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: 'Email hoặc mật khẩu không chính xác',
      });
    }
    const passwordHash = user.password;
    if (!Hash.verify(password, passwordHash)) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: 'Email hoặc mật khẩu không chính xác',
      });
    }
    const accessToken = JWT.createAccessToken({
      userId: user.id,
      email: user.email,
    });
    const refreshToken = JWT.createRefreshToken();
    //Lưu refresh token và userId, email vào redis
    const redisStore = await redis;
    await redisStore.set(
      `refreshToken_${user.id}`,
      JSON.stringify({
        refreshToken,
        email,
      }),
    );
    return res.json({
      success: true,
      message: 'Login success',
      data: {
        accessToken,
        refreshToken,
      },
    });
  }
  @Get('profile')
  profile(@Req() req: any, @Res() res: Response) {
    return res.json({
      success: true,
      message: 'Get Profile Success',
      data: req.user,
    });
  }
  @Post('logout')
  async logout(@Req() req: any) {
    const token = req.token;
    //blacklist_accessToken: 1
    const redisStore = await redis;
    await redisStore.set(`blacklist_${token}`, 1);
    return { success: true, message: 'Logout success' };
  }
  @Get('test-mail')
  async testMail() {
    const info = await sendMail('contact@unicode.vn', 'Test email', 'Ok chưa?');
    return info;
  }
}
