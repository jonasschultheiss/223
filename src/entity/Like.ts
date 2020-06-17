import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import {Image} from './Image';
import {User} from './User';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Image, image => image.like)
  image: Image;

  @ManyToOne(type => User, user => user.likes)
  user: User;
}
