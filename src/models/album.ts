import { Model, Column, Table, PrimaryKey, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import Artist from './artist';
import Song from './song';
import AlbumArtist from './albumArtist';

@Table({ tableName: 'album', freezeTableName: true, underscored: true, timestamps: false })
export default class Album extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column(DataType.CHAR(100))
  name: string;

  @Column(DataType.TEXT)
  albumImageUrl: string;

  @HasMany(() => Song)
  songs: Song[];

  @BelongsToMany(() => Artist, () => AlbumArtist)
  artist: Artist[];
}
