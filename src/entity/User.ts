import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  UpdateDateColumn, OneToMany, OneToOne, JoinColumn,
} from 'typeorm';
import {Image} from "./Image";
import {Comment} from "./Comment";
import {Role} from "./Role";
import {Like} from "./Like";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @VersionColumn()
  version: number;

  @UpdateDateColumn()
  updateDate: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(type => Role)
  @JoinColumn()
  role: Role;

  @OneToMany(type => Image, image => image.user)
  images: Image[];

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(type => Like, like => like.user)
  likes: Like[];
}
