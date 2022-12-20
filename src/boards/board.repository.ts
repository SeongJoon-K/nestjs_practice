import { BoardNewRepository } from './typeorm.decorator';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';

@BoardNewRepository(Board)
export class BoardRepository extends Repository<Board> {}
