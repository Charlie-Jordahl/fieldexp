import { PrimaryGeneratedColumn, Column, JoinTable, OneToOne } from 'typeorm';
import { Fieldtest } from './fieldtest.entity';

export class Gauge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gaugeName: string;

  @Column()
  gaugeMake: string;

  @Column()
  gaugeModel: string;

  @Column()
  gaugeSerialNumber: string;

  @JoinTable()
  @OneToOne(() => Fieldtest, (fieldTest) => fieldTest.gauge)
  fieldTest: Fieldtest;
}
