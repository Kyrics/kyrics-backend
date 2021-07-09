import {
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  Table,
  PrimaryKey,
  DataType,
  AutoIncrement,
  Unique
} from 'sequelize-typescript';

@Table({ tableName: 'user', freezeTableName: true })
export default class User extends Model<User> {
  @PrimaryKey @Column @AutoIncrement
  id: number;

  @Column(DataType.TEXT)
  socialId: string;

  @Column(DataType.CHAR(320)) @Unique
  email: string;

  @Column(DataType.CHAR(100))
  name: string;

  @Column(DataType.TEXT)
  profileImageUrl: string;

  @CreatedAt @Column
  createdAt!: Date;

  @UpdatedAt @Column
  updatedAt!: Date;
}