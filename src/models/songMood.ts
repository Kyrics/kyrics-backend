import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import Song from './song';
import Mood from './mood';

@Table({ tableName: 'song_mood', freezeTableName: true, underscored: true })
export default class SongMood extends Model<SongMood> {
  @ForeignKey(() => Song)
  @Column
  songId: number;

  @ForeignKey(() => Mood)
  @Column
  moodId: number;
}
