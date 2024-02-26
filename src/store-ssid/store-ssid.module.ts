import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreSSID } from './store-ssid.entity';
import { StoreSSIDController } from './store-ssid.controller';
import { StoreSSIDService } from './store-ssid.service';

@Module({
  imports: [TypeOrmModule.forFeature([StoreSSID])],
  controllers: [StoreSSIDController],
  providers: [StoreSSIDService],
  exports: [StoreSSIDService]
})
export class StoreSSIDModule {}