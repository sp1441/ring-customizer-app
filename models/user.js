'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {

    }
  }

  user.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 99],
          msg: "Name must be between 1 and 99 characters"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Invalid email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 99],
          msg: "Password must be between 8 and 99 characters"
        }
      }
    },
    aboutMe: { // added field
      type: DataTypes.TEXT,
      allowNull: true
    },
    website: { // added field
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: "user",
  });

  user.addHook('beforeCreate', (pendingUser) => {
    let hash = bcrypt.hashSync(pendingUser.password, 12);
    pendingUser.password = hash;
  });

  user.prototype.validPassword = function (typedPassword) {
    let isCorrectPassword = bcrypt.compareSync(typedPassword, this.password);
    return isCorrectPassword;
  }

  user.prototype.toJSON = function () {
    let userData = this.get();
    delete userData.password;
    return userData;
  }

  return user;
};
