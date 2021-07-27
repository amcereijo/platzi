import { Body, Put, Delete, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategories(@Param('id') id: string,
    @Param('productId') productId: string): string {
    return `product ${id} - ${productId}`;
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
