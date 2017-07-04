'use strict'

const {STRING, INTEGER, TEXT, ENUM, DATE, NOW} = require('sequelize')

module.exports = db => db.define('projects', {
  name: STRING,
  grade: STRING,
  attempts: {
    type: INTEGER,
    allowNull: true
  },
  location: STRING,
  stars: ENUM('1', '2', '3', '4', '5'),
  notes: {
    type: TEXT,
    allowNull: true
  },
  imageURL: {
    type: STRING,
    allowNull: true
  },
  dateStarted: {
    type: DATE,
    defaultValue: NOW
  },
  dateSent: {
    type: DATE,
    allowNull: true
  }
})

module.exports.associations = (Project, {User}) => {
  Project.belongsTo(User)
}
