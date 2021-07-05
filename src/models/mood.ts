export default (seqelize, DataTypes) => {
    return sequelize.define('Mood', {
        type:{
            type:DataTypes.STRING(45),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timesstamps: false,
    });
};