import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StoreSSIDService } from './store-ssid.service';
import { StoreSSID } from './store-ssid.entity';

@Controller('storeSSID')
export class StoreSSIDController {
  constructor(private readonly storeSSIDService: StoreSSIDService) {}

  @Get()
  findAll(): Promise<StoreSSID[]> {
    return this.storeSSIDService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<StoreSSID> {
    return this.storeSSIDService.findOne(+id);
  }

  @Post()
  create(@Body() storeSSID: StoreSSID): Promise<StoreSSID> {
    return this.storeSSIDService.create(storeSSID);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() storeSSID: StoreSSID): Promise<StoreSSID> {
    return this.storeSSIDService.update(+id, storeSSID);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.storeSSIDService.remove(+id);
  }
}