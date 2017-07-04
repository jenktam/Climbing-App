import React, { Component } from 'react'

const Projects = props => {
  console.log('props', props)

  return (
  <div>
    <h1>All Projects</h1>
    <p>Hello again</p>
    <ul>
      {
        props.projects && props.projects.map(project => (
          <li key={project.id}>
            <div>Name: {project.name} </div>
            <div>Grade: {project.grade} </div>
            <div>Attempts: {project.attempts} </div>
            <div>Location: {project.location} </div>
          </li>
        ))
      }
    </ul>
  </div>
  )
}

export default Projects
