import { Model, Column, Table, DataType, Unique, BelongsToMany, PrimaryKey } from 'sequelize-typescript';
import Song from './song';
import SongMood from './songMood';

@Table({ tableName: 'mood', freezeTableName: true, underscored: true, timestamps: false })
export default class Mood extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @Column(DataType.CHAR(50))
  type: string;

  @BelongsToMany(() => Song, () => SongMood)
  songs: Song[];
}
