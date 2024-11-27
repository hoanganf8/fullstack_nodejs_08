import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './modules/auth/auth.module';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { AuthService } from './modules/auth/auth.service';
import { PrismaService } from './db/prisma.service';
import { PhonesModule } from './modules/phones/phones.module';
import { CoursesModule } from './modules/courses/courses.module';
import { RolesModule } from './modules/admin/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: '.env',
    }),
    UsersModule,
    AuthModule,
    PhonesModule,
    CoursesModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      {
        path: 'auth/profile',
        method: RequestMethod.GET,
      },
      {
        path: 'auth/logout',
        method: RequestMethod.POST,
      },
    );
  }
}
