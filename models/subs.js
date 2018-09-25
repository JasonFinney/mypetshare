module.exports = function (sequelize, DataTypes) {
    var Subs = sequelize.define("Subs", {
        sub_name: DataTypes.STRING,
        food_sub_gourmet: DataTypes.BOOLEAN,
        food_sub_wet: DataTypes.BOOLEAN,
        food_sub_dry: DataTypes.BOOLEAN,
        groom_sub_prem: DataTypes.BOOLEAN,
        groom_sub_mid: DataTypes.BOOLEAN,
        groom_sub_low: DataTypes.BOOLEAN,
        walk_sub: DataTypes.INTEGER,
        sit_sub: DataTypes.INTEGER
    });
    Subs.associate = function (models) {
        Subs.belongsTo(models.User, {
            foreignKey: {
                name: "id",
                allowNull: false
            }
        });
    };
    return Subs;
};
