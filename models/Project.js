const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  image: {
    type: DataTypes.STRING
  },
  demoUrl: {
    type: DataTypes.STRING
  },
  githubUrl: {
    type: DataTypes.STRING
  },
  downloadUrl: {
    type: DataTypes.STRING
  },
  techStack: {
    type: DataTypes.STRING, // Comma separated
    get() {
      return this.getDataValue('techStack')?.split(',') || [];
    },
    set(val) {
      if (Array.isArray(val)) {
        this.setDataValue('techStack', val.join(','));
      } else {
        this.setDataValue('techStack', val);
      }
    }
  },
  price: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  }
});

module.exports = Project;
