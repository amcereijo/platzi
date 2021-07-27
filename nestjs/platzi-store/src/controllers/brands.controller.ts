import { Delete, Put, Param, Body, Controller, Get, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  get(): string {
    return 'brands'
  }

  @Post()
  create(@Body() payload: any) {
    console.log('pay',payload);
    return {
      message: 'crear',
      payload
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload
    }
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return id;
  }
}
