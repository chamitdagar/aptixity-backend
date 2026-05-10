const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Template = sequelize.define('Template', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  usageCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Template;
