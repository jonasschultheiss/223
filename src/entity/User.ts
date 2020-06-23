import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn, ManyToOne, ManyToMany, JoinTable,
} from 'typeorm';
import {Image} from './Image';
import {Comment} from './Comment';
import {Role} from './Role';
import {Like} from './Like';
import {Profilepicture} from "./Profilepicture";

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

  @OneToOne(type => Profilepicture, profilePicture => profilePicture.user)
  @JoinColumn()
  profilePicture: Profilepicture;

  @ManyToOne(type => Role, role => role.user)
  role: Role;

  @OneToMany(type => Image, image => image.user)
  images: Image[];

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(type => Like, like => like.user)
  likes: Like[];
}
