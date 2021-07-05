module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Lyrics', {
        kor:{
            type: DataTypes.TEXT,
            allowNull: false,
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
    }{
        freezeTableName: true,
        timesstamps: false
    });
};