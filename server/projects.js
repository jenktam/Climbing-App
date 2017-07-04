'use strict'

const db = require('APP/db')
const Project = db.model('projects')

module.exports = require('express').Router()

.get('/', (req, res, next) => {
  Project.findAll()
  .then(allProjects => {
    res.send(allProjects)
  })
  .catch(next)
})

.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
  .then(project => res.send(project))
  .catch(next)
})
