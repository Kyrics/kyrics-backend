/* eslint-disable @typescript-eslint/ban-types */
import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface AlbumAttributes {
    id: number;
    title: string; 
    image: string;
}
export interface AlbumModel extends Model<AlbumAttributes>, AlbumAttributes {}
export class Album extends Model<AlbumModel, AlbumAttributes> {}

export type AlbumStatic = typeof Model & {
    new (value?: object, options?: BuildOptions): AlbumModel;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (sequelize: Sequelize) => <AlbumStatic>sequelize.define("Albums",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.CHAR,
        },
    }, {
        freezeTableName: true,
        timestamps: false
    }
);
