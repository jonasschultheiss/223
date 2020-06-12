import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import {User} from './User';
import {Image} from './Image';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @VersionColumn()
  version: number;

  @UpdateDateColumn()
  updateDate: string;

  @Column()
  text: string;

  @ManyToOne(type => User, user => user.comments)
  user: User;

  @ManyToOne(type => Image, image => image.comment)
  image: Image;
}
