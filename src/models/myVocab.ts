import { Column, ForeignKey, Table, Model, CreatedAt } from 'sequelize-typescript';
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
  @Column
  createdAt?: Date;
}
