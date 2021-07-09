import {
    Model,
    Column,
    Table,
    DataType
} from 'sequelize-typescript';

@Table({ tableName: 'key_expression', freezeTableName: true })
export default class KeyExpression extends Model<KeyExpression> {
    @Column({ primaryKey: true })
    id: number;

    @Column(DataType.TEXT)
    kor: string;

    @Column(DataType.TEXT)
    eng: string;

    @Column(DataType.TEXT)
    korExample: string;

    @Column(DataType.TEXT)
    engExample: string;
}