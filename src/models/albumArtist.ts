import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import Album from './album';
import Artist from './artist';

@Table({ tableName: 'album_artist', freezeTableName: true, underscored: true })
export default class AlbumArtist extends Model {
  @ForeignKey(() => Album)
  @Column
  albumId: number;

  @ForeignKey(() => Artist)
  @Column
  artistId: number;
}
