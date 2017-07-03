'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('projects', {
  name: STRING,
  grade: STRING,
  attempts: INTEGER,
  location: STRING
})

module.exports.associations = (Project, {User, Favorite}) => {
  Project.belongsToMany(User, { through: Favorite })
}
