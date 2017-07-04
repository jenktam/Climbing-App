import React, { Component } from 'react'

export default class ProjectForm extends Commponent {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      grade: '',
      attempts: 0,
      location: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
        </form>
      </div>
    )
  }
}
