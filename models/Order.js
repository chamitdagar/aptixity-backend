const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  projectType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  budget: {
    type: DataTypes.STRING
  },
  details: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.ENUM('pending', 'contacted', 'in-progress', 'completed', 'cancelled'),
    defaultValue: 'pending'
  }
});

const User = require('./User');
Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Order, { foreignKey: 'userId', as: 'orders' });

module.exports = Order;
