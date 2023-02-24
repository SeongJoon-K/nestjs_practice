import { SuccessIntercepor } from './../common/interceptor/success.interceptor';
import { PositiveIntPipe } from './../common/pipes/positiveInt.pipe';
import { HttpExceptionFilter } from '../common/exceptions/http-exeption.filter';
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
  UseInterceptors,
} from '@nestjs/common';

@Controller('cats')
@UseInterceptors(SuccessIntercepor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return { cats: 'get all cat log' };
  }
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
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
