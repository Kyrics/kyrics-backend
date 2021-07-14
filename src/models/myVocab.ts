import { Column, ForeignKey, Table, Model, CreatedAt, Default } from 'sequelize-typescript';
import { Sequelize } from 'sequelize';
import User from './user';
import KeyExpression from './keyExpression';

@Table({ tableName: 'my_vocab', freezeTableName: true, underscored: true, timestamps: false })
export default class MyVocab extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => KeyExpression)
  @Column
  keyExpressionId: number;

  @CreatedAt
  @Default(Sequelize.fn('NOW'))
  @Column
  createdAt?: Date;
}
