// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private readonly itemsRepository: Repository<Item>,
    ) { }

    findAll(): Promise<Item[]> {
        return this.itemsRepository.find();
    }

    findOne(id: number): Promise<Item> {
        return this.itemsRepository.findOne({ where: { id } });
    }

    create(item: Item): Promise<Item> {
        return this.itemsRepository.save(item);
    }

    async update(id: number, item: Item): Promise<Item> {
        await this.itemsRepository.update(id, item);
        return this.itemsRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.itemsRepository.delete(id);
    }
}
