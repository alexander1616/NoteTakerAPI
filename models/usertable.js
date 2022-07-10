'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTables extends Model {
    static associate({ UserEvents }) {
      UserTables.hasMany(UserEvents, {
        foreignKey: "eventId",
        as: "event_id"
      })
    }
  }
  UserTables.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'UserTables',
    tableName: 'UserTables',
    timestamps: false
  });
  return UserTables;
};