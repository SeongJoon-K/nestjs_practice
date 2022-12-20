import { BoardNewRepository } from './typeorm.decorator';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

@BoardNewRepository(Board)
export class BoardRepository extends Repository<Board> {}
