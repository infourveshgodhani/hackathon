import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('storeSSID')
export class StoreSSID {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  storeid: number;

  @Column()
  ssid: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}