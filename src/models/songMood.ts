import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import Song from './song';
import Mood from './mood';

@Table({ tableName: 'song_mood', freezeTableName: true, underscored: true, timestamps: false })
export default class SongMood extends Model {
  @ForeignKey(() => Song)
  @Column
  songId: number;

  @ForeignKey(() => Mood)
  @Column
  moodId: number;
}
