import { connect } from 'react-redux'
import Projects from './Projects'

const mapStateToProps = state => ({
  projects: state.projects.projects
})

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(Projects)
