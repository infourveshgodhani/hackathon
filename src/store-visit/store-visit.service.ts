import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreVisit } from './store-visit.entity';
import { ICustomerWalkin, IStoreVisit } from './store-visit.interface';
import { StoreSSIDService } from 'src/store-ssid/store-ssid.service';

@Injectable()
export class StoreVisitService {
    constructor(
        @InjectRepository(StoreVisit)
        private storeVisitRepository: Repository<StoreVisit>,
        private storeSSIDService : StoreSSIDService
    ) { }

    async findAll(): Promise<StoreVisit[]> {
        try {
            return await this.storeVisitRepository.find();
        } catch (error) {
            throw new InternalServerErrorException('Failed to retrieve storeVisits.');
        }
    }

    async findOne(id: number): Promise<StoreVisit> {
        try {
            const storeVisit = await this.storeVisitRepository.findOne({ where: { id } });

            if (!storeVisit) {
                throw new NotFoundException(`StoreVisit with ID ${id} not found`);
            }

            return storeVisit;
        } catch (error) {
            throw new InternalServerErrorException('Failed to retrieve the storeVisit.');
        }
    }

    async walkInUpdate(data: ICustomerWalkin) {
        try {
            await this.storeVisitRepository.update({
                customerId: data.customerId,
                isExpired: false
            }, {
                walkinId: data.walkinId,
            });
        } catch(error) {
            throw new InternalServerErrorException('Failed to fetch the storeVisit.');
        }
    }

    async getNearbyCustomer(storeId: number) {
        try {
            return await this.storeVisitRepository.find({where: { storeId: storeId, isCheckedIn: false, hasPurchased: false, isExpired: false}})
        } catch (error) {
            throw new InternalServerErrorException('Failed to fetch the storeVisit.');
        }
    }

    async create(storeVisit: IStoreVisit): Promise<void> {
        try {
            let storeData = await this.storeSSIDService.getStoreSSID(storeVisit.ssid)
            delete storeVisit.ssid;
            storeVisit.storeId = storeData.storeid;
            await this.storeVisitRepository.save(storeVisit);
        } catch (error) {
            console.log(error);
          throw new InternalServerErrorException('Failed to create the storeVisit.');
        }
    }    

    async update(id: number, storeVisit: StoreVisit): Promise<StoreVisit> {
        try {
            await this.findOne(id); // Ensure the storeVisit exists

            await this.storeVisitRepository.update(id, storeVisit);
            return await this.storeVisitRepository.findOne({ where: { id } });
        } catch (error) {
            throw new InternalServerErrorException('Failed to update the storeVisit.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const storeVisit = await this.findOne(id); // Ensure the storeVisit exists

            await this.storeVisitRepository.remove(storeVisit);
        } catch (error) {
            throw new InternalServerErrorException('Failed to delete the storeVisit.');
        }
    }
}