import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany, JoinColumn,
} from 'typeorm';
import {User} from './User';
import {Comment} from './Comment';
import {Like} from './Like';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @VersionColumn()
  version: number;

  @UpdateDateColumn()
  updateDate: string;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @ManyToOne(type => User, user => user.images)
  user: User;

  @OneToMany(type => Comment, comment => comment.image)
  comment: Comment[];

  @OneToMany(type => Like, like => like.image)
  like: Like[];
}
