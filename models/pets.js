module.exports = function (sequelize, DataTypes) {
    var Pets = sequelize.define("Pets", {
        pet_name: DataTypes.STRING,
        pet_type: DataTypes.STRING,
        pet_breed: DataTypes.STRING,
        pet_picture_url: DataTypes.STRING,
        service_animal: DataTypes.BOOLEAN
    });
    Pets.associate = function (models) {
        Pets.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Pets;
};
