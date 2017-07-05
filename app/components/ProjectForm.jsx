import React, { Component } from 'react'

export default class ProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      grade: '',
      attempts: 0,
      location: '',
      stars: '',
      notes: '',
      imageURL: '',
      dateSent: ''
    }

    this.handleName = this.handleName.bind(this)
    this.handleGrade = this.handleGrade.bind(this)
    this.handleAttempts = this.handleAttempts.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.handleStars = this.handleStars.bind(this)
    // this.handleNotes = this.handleNotes.bind(this)
    // this.handleImageURL = this.handleImageURL.bind(this)
    // this.handleDateSent = this.handleDateSent.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleGrade(e) {
    this.setState({
      grade: e.target.value
    })
  }

  handleAttempts(e) {
    this.setState({
      attempts: e.target.value
    })
  }

  handleLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  handleStars(e) {
    this.setState({
      stars: e.target.value
    })
  }

  // handleNotes(e) {
  //   this.setState({
  //     notes: e.target.value
  //   })
  // }

  // handleImageURL(e) {
  //   this.setState({
  //     imageURL: e.target.value
  //   })
  // }

  // handleDateSent(e) {
  //   this.setState({
  //     dateSent: e.target.value
  //   })
  // }

  handleSubmit(e) {
    console.log('form submitted!')
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <div>
            <label>Name: </label>
            <input
              type="text"
              name='name'
              onChange={this.handleName}
            />
          </div>

          <div>
            <label>Grade: </label>
            <input
              type="text"
              name='grade'
              onChange={this.handleGrade}
            />
          </div>

          <div>
            <label>Attempts: </label>
            <input
              type="text"
              name='attempts'
              onChange={this.handleAttempts}
            />
          </div>

          <div>
            <label>Location: </label>
            <input
              type="text"
              name='location'
              onChange={this.handleLocation}
            />
          </div>

          <div>
            <label>Stars: </label>
            <input
              type="text"
              name='stars'
              onChange={this.handleStars}
            />
          </div>

          <button>Submit</button>

        </form>
      </div>
    )
  }
}


          // <div>
          //   <label>Notes: </label>
          //   <input
          //     type="text"
          //     name='notes'
          //     onChange={this.handleNotes}
          //   />
          // </div>

          // <div>
          //   <label>imageURL: </label>
          //   <input
          //     type="text"
          //     name='imageURL'
          //     onChange={this.handleImageURL}
          //   />
          // </div>

          // <div>
          //   <label>Date Sent: </label>
          //   <input
          //     type="text"
          //     name='dateSent'
          //     onChange={this.handleDateSent}
          //   />
          // </div>
