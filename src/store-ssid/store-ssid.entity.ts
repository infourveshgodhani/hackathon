import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('storeSSID')
export class StoreSSID {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  storeid: number;

  @Column({unique: true})
  ssid: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}