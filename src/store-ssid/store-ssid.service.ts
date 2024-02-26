// src/store-ssid/store-ssid.service.ts
import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreSSID } from './store-ssid.entity';

@Injectable()
export class StoreSSIDService {
    constructor(
        @InjectRepository(StoreSSID)
        private readonly storeSSIDRepository: Repository<StoreSSID>,
    ) { }

    async findAll(): Promise<StoreSSID[]> {
        try {
            return await this.storeSSIDRepository.find();
        } catch (error) {
            throw new InternalServerErrorException('Failed to retrieve storeSSIDs.');
        }
    }

    async findOne(id: number): Promise<StoreSSID> {
        try {
            const storeSSID = await this.storeSSIDRepository.findOne({ where: { id: id } });

            if (!storeSSID) {
                throw new NotFoundException(`StoreSSID with ID ${id} not found`);
            }

            return storeSSID;
        } catch (error) {
            throw new InternalServerErrorException('Failed to retrieve the storeSSID.');
        }
    }

    async getStoreSSID(storeID: number): Promise<StoreSSID> {
        try {
            return await this.storeSSIDRepository.findOne({ where: { ssid: storeID } })
        } catch (error) {
            throw new InternalServerErrorException('Failed to create the storeSSID.');
        }
    }

    async create(storeSSID: StoreSSID): Promise<StoreSSID> {
        try {
            return await this.storeSSIDRepository.save(storeSSID);
        } catch (error) {
            throw new InternalServerErrorException('Failed to create the storeSSID.');
        }
    }

    async update(id: number, storeSSID: StoreSSID): Promise<StoreSSID> {
        try {
            await this.findOne(id); // Ensure the storeSSID exists

            await this.storeSSIDRepository.update(id, storeSSID);
            return await this.storeSSIDRepository.findOne({ where: { id: id } });
        } catch (error) {
            throw new InternalServerErrorException('Failed to update the storeSSID.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const storeSSID = await this.findOne(id); // Ensure the storeSSID exists

            await this.storeSSIDRepository.remove(storeSSID);
        } catch (error) {
            throw new InternalServerErrorException('Failed to delete the storeSSID.');
        }
    }
}
