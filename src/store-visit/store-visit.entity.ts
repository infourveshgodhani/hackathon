import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('storeVisit')
export class StoreVisit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  storeId: number;

  @Column()
  customerId: number;

  @Column({ default: false })
  isCheckedIn: boolean;

  @Column({ default: false })
  hasPurchased: boolean;

  @Column({ default: false })
  isExpired: boolean;

  @Column({ type: "text", default: '' })
  UTM: string;

  @Column({ nullable: true })
  walkinId: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}