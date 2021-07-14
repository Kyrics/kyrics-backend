import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import Song from './song';
import MyVocab from './myVocab';
import User from './user';

@Table({ tableName: 'key_expression', freezeTableName: true, underscored: true, timestamps: false })
export default class KeyExpression extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.TEXT)
  kor: string;

  @Column(DataType.TEXT)
  eng: string;

  @Column(DataType.TEXT)
  korExample: string;

  @Column(DataType.TEXT)
  engExample: string;

  @ForeignKey(() => Song)
  @Column
  songId: number;

  @BelongsTo(() => Song)
  song: Song;

  @BelongsToMany(() => User, () => MyVocab)
  users: User[];
}
