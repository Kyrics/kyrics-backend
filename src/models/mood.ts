import {
  Model,
  Column,
  Table,
  DataType,
  Unique,
  BelongsToMany
} from 'sequelize-typescript';
import Song from './song';
import SongMood from './songMood';

@Table({ tableName: 'mood', freezeTableName: true, underscored: true})
export default class Mood extends Model<Mood> {
  @Column({ primaryKey: true })
  id: number;

  @Unique
  @Column(DataType.TEXT)
  type: string;

  @BelongsToMany(() => Song, () => SongMood)
  songs: Song[];
}