// src/items/items.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Item> {
        return this.itemsService.findOne(parseInt(id, 10));
    }

    @Post()
    create(@Body() item: Item): Promise<Item> {
        return this.itemsService.create(item);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() item: Item): Promise<Item> {
        return this.itemsService.update(parseInt(id, 10), item);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.itemsService.remove(parseInt(id, 10));
    }
}
