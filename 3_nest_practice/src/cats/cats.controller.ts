import { HttpExceptionFilter } from './../http-exeption.filter';
import { CatsService } from './cats.service';
import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllCat() {
    throw new HttpException('api is broken', 401);
    return 'all cat';
  }
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);

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
