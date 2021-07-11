import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import Song from './song';
import Artist from './artist';

@Table({ tableName: 'song_artist', freezeTableName: true, underscored: true })
export default class SongArtist extends Model<SongArtist> {
  @ForeignKey(() => Song)
  @Column
  songId: number;

  @ForeignKey(() => Artist)
  @Column
  artistId: number;
}
