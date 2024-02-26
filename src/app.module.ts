import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { StoreSSIDModule } from './store-ssid/store-ssid.module';
import { StoreSSIDController } from './store-ssid/store-ssid.controller';
import { StoreSSIDService } from './store-ssid/store-ssid.service';
import { StoreVisitModule } from './store-visit/store-visit.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    StoreSSIDModule,
    StoreVisitModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'railway',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
