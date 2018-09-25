var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    home_address_1: DataTypes.STRING,
    home_address_2: DataTypes.STRING,
    home_city: DataTypes.STRING,
    home_state: DataTypes.STRING,
    home_zipcode: DataTypes.STRING,
    credit_numb: DataTypes.STRING
  });
  User.associate = function (models) {
    User.hasMany(models.Pets, {
      onDelete: "cascade"
    });
  };
  User.associate = function (models) {
    User.hasMany(models.Subs, {
      onDelete: "cascade"
    });
  };
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
