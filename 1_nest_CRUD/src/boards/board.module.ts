import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardsController } from './boards.controller';
import { BoardRepository } from './board.repository';
import { BoardsService } from './boards.service';
import { TypeOrmExModule } from '../database/typeorm-ex.module';
import { Board } from './board.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository]),
            AuthModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
