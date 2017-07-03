'use strict'

const {STRING, ENUM} = require('sequelize')

module.exports = db => db.define('favorites', {
  starts: {
    type: ENUM('1', '2', '3', '4', '5')
  }
})

module.exports.associations = (Favorite, {Project, User}) => {
  Favorite.belongsTo(Project)
  Favorite.belongsTo(User)
}
