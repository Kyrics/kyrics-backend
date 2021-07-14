import { Column, ForeignKey, Table, Model, CreatedAt, Default } from 'sequelize-typescript';
import { Sequelize } from 'sequelize';
import User from './user';
import Song from './song';

@Table({ tableName: 'my_songs', freezeTableName: true, underscored: true, timestamps: false })
export default class MySongs extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Song)
  @Column
  songId: number;

  @CreatedAt
  @Default(Sequelize.fn('NOW'))
  @Column
  createdAt?: Date;
}
