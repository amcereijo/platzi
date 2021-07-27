import { Put, Delete, Param, Body, Controller, Get, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  get(): string {
    return 'orders'
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
