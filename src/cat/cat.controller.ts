import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto/cat.dto';
import fs from 'fs';
import * as data_mocked from '../cat/data.json';
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Get()
  async getCats() {
    return {
      data: await this.catService.findAll(),
    };
  }
  @Get('/data')
  getDataSaya() {
    return {
      data: data_mocked,
    };
  }
  @Post()
  createCat(@Body() CatDto: CatDto) {
    return this.catService.create(CatDto);
  }
}
