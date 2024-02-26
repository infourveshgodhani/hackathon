// src/store-visit/store-visit.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreVisit } from './store-visit.entity';
import { StoreVisitController } from './store-visit.controller';
import { StoreVisitService } from './store-visit.service';
import { StoreSSIDModule } from 'src/store-ssid/store-ssid.module';

@Module({
  imports: [TypeOrmModule.forFeature([StoreVisit]), StoreSSIDModule],
  controllers: [StoreVisitController],
  providers: [StoreVisitService],
  exports: [StoreVisitService]
})
export class StoreVisitModule {}
