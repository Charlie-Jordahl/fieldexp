import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Fieldtest } from './fieldtest.entity';
import { User } from './user.entity';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  formName: string;

  @Column()
  projectId: string;

  @Column()
  formDate: string;

  @ManyToOne(() => User, (user) => user.forms, {
    cascade: true,
  })
  users: User[];

  @JoinTable()
  @OneToMany(() => Fieldtest, (fieldTest) => fieldTest.form, {
    cascade: true,
  })
  tests: Fieldtest[];
}
