import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  testType: string;

  @Column()
  formName: string;

  @Column()
  projectID: string;

  @Column()
  testDate: string;
}
