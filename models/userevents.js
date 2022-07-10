'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserEvents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Notes, UserTables }) {
      UserEvents.hasMany(Notes, {
        foreignKey: "eventId",
        as: "notes"
      });

      UserEvents.belongsTo(UserTables, {
        foreignKey: "eventId",
        as: "user"
      })
    };
  }

  UserEvents.init({
    eventId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    eventTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'UserEvents',
    tableName: 'UserEvents',
    timestamps: false
  });
  return UserEvents;
};