import { connect } from 'react-redux'
import Projects from './Projects'

const mapStateToProps = state => ({
  projects: state.allProjects
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps)(Projects)
