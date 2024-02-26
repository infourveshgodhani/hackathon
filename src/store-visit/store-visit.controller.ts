import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StoreVisitService } from './store-visit.service';
import { StoreVisit } from './store-visit.entity';
import { IStoreVisit } from './store-visit.interface';

@Controller('storeVisit')
export class StoreVisitController {
  constructor(private readonly storeVisitService: StoreVisitService) {}

  @Get()
  findAll(): Promise<StoreVisit[]> {
    return this.storeVisitService.findAll();
  }

  @Post()
  create(@Body() storeVisit: IStoreVisit): Promise<void> {
    return this.storeVisitService.create(storeVisit);
  }

  @Get(':id')
  nearByCustomer(@Param('id') id: string){
    return this.storeVisitService.getNearbyCustomer(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() storeVisit: StoreVisit): Promise<StoreVisit> {
    return this.storeVisitService.update(+id, storeVisit);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.storeVisitService.remove(+id);
  }
}
