import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface VocabAttributes {
    kor: string;
    eng: string;
    korExample: string;
    engExample: string;
}

export interface VocabModel extends Model<VocabAttributes>, VocabAttributes{}

export class Vocab extends Model<VocabModel, VocabAttributes>{}

export type VocabStatic = typeof Model $ {
    new (values?: object, options?: BuildOptions): VocabModel;
};

export function VocabFactory ( sequelize: Sequelize){
    return <VocabStatic>sequelize.define(
        'Vocab',
    {
        kor: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        eng: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        korExample: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        engExample: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
        freezeTableName: true,
        timestamps: false,
    }
    )
}