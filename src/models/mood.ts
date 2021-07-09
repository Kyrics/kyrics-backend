import {
  Model,
  Column,
  Table,
  DataType,
  Unique
} from 'sequelize-typescript';

@Table({ tableName: 'mood', freezeTableName: true })
export default class Mood extends Model<Mood> {
  @Column({ primaryKey: true })
  id: number;

  @Unique
  @Column(DataType.TEXT)
  type: string;
}