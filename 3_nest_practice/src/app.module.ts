import { LoggerMiddleware } from './logger.middleware';
import { CatsService } from './cats/cats.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    //forRoutes를 와일드카드 * 로 하게되면 모든 엔드포인트에 대해서 미들웨어가 작동하게 된다.
  }
}

// export 한 서비스들을 imports 하면 해당 모듈을 메인에서 사용할 수 있음
