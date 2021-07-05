import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface LyricsAttributes{
    kor: string;
    eng: string;
    start_time: string;
    duration: string;
}

export interface LyricsModel extends Model<LyricsAttributes>, LyricsAttributes{}

export class Lyrics extends Model<LyricsModel, LyricsAttributes>{}

export type LyricsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): LyricsModel;
  };

export function LyricsFactory (sequelize : Sequelize) {
    return <LyricsStatic>sequelize.define('Lyrics', {
        kor:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        eng :{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        start_time:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        duration :{
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
} 