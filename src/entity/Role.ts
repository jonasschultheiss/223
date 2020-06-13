import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  UpdateDateColumn, ManyToOne, OneToMany,
} from 'typeorm';
import {User} from "./User";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @VersionColumn()
  version: number;

  @UpdateDateColumn()
  updateDate: string;

  @Column()
  name: string;

  @OneToMany(type => User,user => user.role)
  user: User;
}
