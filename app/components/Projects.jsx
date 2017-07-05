import React, { Component } from 'react'

const Projects = props => {
  console.log('props', props)

  return (
  <div className="col-md-12">
    <h1>All Projects</h1>
    <ul>
      {
        props.projects && props.projects.map(project => (
          <li key={project.id} className="col-sm-3">
            <div className="thumbnail">
              <img src={project.imageURL} className="img-responsive" alt="a"/>
            </div>
            <div>Name: {project.name} </div>
            <div>Grade: {project.grade} </div>
            <div>Attempts: {project.attempts} </div>
            <div>Location: {project.location} </div>
            <div>Stars: {project.stars} </div>
            <div>Notes: {project.notes} </div>
            <div>Date Started: {project.dateStarted} </div>
          </li>
        ))
      }
    </ul>

  </div>
  )
}

export default Projects
