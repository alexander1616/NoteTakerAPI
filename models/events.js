'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Notes, Users }) {
      Events.hasMany(Notes, {
        foreignKey: "eventId",
        as: "notes"
      });

      Events.belongsTo(Users, {
        foreignKey: "eventId",
        as: "user"
      })
    };
  }

 Events.init({
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
    modelName: 'Events',
    tableName: 'Events',
    timestamps: false
  });
  return Events;
};