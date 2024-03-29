import { Model, Column, DataType, Table, PrimaryKey, BelongsToMany, AutoIncrement } from 'sequelize-typescript';
import Album from './album';
import AlbumArtist from './albumArtist';
import Song from './song';
import SongArtist from './songArtist';

@Table({ tableName: 'artist', freezeTableName: true, underscored: true, timestamps: false })
export default class Artist extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.CHAR(100))
  name: string;

  @Column(DataType.TEXT)
  profileImageUrl: string;

  @Column(DataType.TEXT)
  backgroundImageUrl: string;

  @Column(DataType.TEXT)
  logoImageUrl: string;

  @BelongsToMany(() => Song, () => SongArtist)
  songs: Song[];

  @BelongsToMany(() => Album, () => AlbumArtist)
  albums: Album[];
}
