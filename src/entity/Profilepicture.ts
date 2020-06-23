import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn, ManyToMany
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

  @OneToOne(type => User, user => user.profilePicture)
  user: User;
}
