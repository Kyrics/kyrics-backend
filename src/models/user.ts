import {
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  Table,
  DataType,
  Unique
} from 'sequelize-typescript';

@Table({ tableName: 'user', freezeTableName: true, underscored: true})
export default class User extends Model<User> {
  @Column({ primaryKey: true })
  id: number;

  @Column(DataType.TEXT)
  socialId: string;

  @Unique
  @Column(DataType.CHAR(320))
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
}
