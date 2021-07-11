import {
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  Table,
  DataType,
  Unique,
  BelongsToMany,
  PrimaryKey,
} from 'sequelize-typescript';
import Song from './song';
import MySongs from './mySongs';
import KeyExpression from './keyExpression';
import MyVocab from './myVocab';

@Table({ tableName: 'user', freezeTableName: true, underscored: true })
export default class User extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column(DataType.TEXT)
  socialId: string;

  @Unique
  @Column
  email: string;

  @Column(DataType.CHAR(100))
  name: string;

  @Column(DataType.TEXT)
  profileImageUrl: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @BelongsToMany(() => Song, () => MySongs)
  songs: Song[];

  @BelongsToMany(() => KeyExpression, () => MyVocab)
  keyExpressions: KeyExpression[];
}
