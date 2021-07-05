/* eslint-disable @typescript-eslint/ban-types */
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

export interface ArtistAttributes {
    id: number;
    name: string; 
}
export interface ArtistModel extends Model<ArtistAttributes>, ArtistAttributes {}
export class Artist extends Model<ArtistModel, ArtistAttributes> {}

export type ArtistStatic = typeof Model & {
    new (value?: object, options?: BuildOptions): ArtistModel;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (sequelize: Sequelize) => <ArtistStatic>sequelize.define("artists",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.CHAR,
            allowNull: false,
            unique: true
        },
    }, {
        freezeTableName: true,
        timestamps: false
    }
);
