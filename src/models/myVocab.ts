import { Column, ForeignKey, Table, Model } from 'sequelize-typescript';
import User from './user';
import KeyExpression from './keyExpression';

@Table({ tableName: 'my_vocab', freezeTableName: true, underscored: true })
export default class MyVocab extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => KeyExpression)
  @Column
  keyExpressionId: number;
}
