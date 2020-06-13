import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { User } from './User';
import { join } from 'path';

@Entity()
export class Profilepicture {
  @PrimaryGeneratedColumn()
  id: number;

  @VersionColumn()
  version: number;

  @UpdateDateColumn()
  updateDate: string;

  @Column('text')
  content: string;

  @Column()
  user: number;
}
