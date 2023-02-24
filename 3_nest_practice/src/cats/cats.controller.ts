import { CatsService } from './cats.service';
import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'all cat';
  }
  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }
  @Patch()
  updateCat() {
    return;
  }

  @Delete()
  deleteCat() {
    return 'delete cats';
  }
}
