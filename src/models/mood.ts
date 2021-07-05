import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface MoodAttributes{
  type: string;
};

export interface MoodModel extends Model<MoodAttributes>, MoodAttributes{}

export class Mood extends Model<MoodModel, MoodAttributes>{}

export type MoodStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): MoodModel;
  };

export function MoodFactory (sequelize: Sequelize) {
  return <MoodStatic>sequelize.define(
    'Mood',
    {
      type: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
}