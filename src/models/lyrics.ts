import {
    Model,
    Column,
    Table,
    DataType
} from 'sequelize-typescript';

@Table({ tableName: 'lyrics', freezeTableName: true })
export default class Lyrics extends Model<Lyrics> {
    @Column({ primaryKey: true })
    id: number;

    @Column(DataType.TEXT)
    kor: string;

    @Column(DataType.TEXT)
    eng: string;

    @Column(DataType.TEXT)
    startTime: string;

    @Column(DataType.TEXT)
    duration: string;
}