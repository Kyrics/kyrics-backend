import {
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  Table,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import User from './user';
import Album from './album';
import Artist from './artist';
import Mood from './mood';
import KeyExpression from './keyExpression';
import SongMood from './songMood';
import MySongs from './mySongs';
import SongArtist from './songArtist';

@Table({ tableName: 'song', freezeTableName: true, underscored: true })
export default class Song extends Model<Song> {
  @Column
  @PrimaryKey
  id: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @ForeignKey(() => Album)
  @Column
  albumId: number;

  @BelongsTo(() => Album)
  album: Album;

  @BelongsToMany(() => Mood, () => SongMood)
  moods: Mood[];

  @BelongsToMany(() => User, () => MySongs)
  users: User[];

  @HasMany(() => Artist, () => SongArtist)
  artists: Artist[];

  @HasMany(() => KeyExpression)
  keyExpressions: KeyExpression[];
}
