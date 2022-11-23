import {
  Column,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Form } from './form.entity';
import { Gauge } from './gauge.entity';

export class Fieldtest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  elevation: string;

  @Column()
  locationNote: string;

  @JoinTable()
  @ManyToOne(() => Form, (form) => form.tests, {
    cascade: true,
  })
  form: Form;

  @JoinTable()
  @OneToOne(() => Gauge, (gauge) => gauge.fieldTest, {
    cascade: true,
  })
  gauge: Gauge;
}
