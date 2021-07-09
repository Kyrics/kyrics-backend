import { Model, Column, CreatedAt, UpdatedAt, Table, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'song', freezeTableName: true })
export default class Song extends Model<Song> {
  @Column
  @PrimaryKey
  id: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
