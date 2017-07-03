import React from 'react'
import {connect} from 'react-redux'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'

import Root from './components/Root'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Jokes from './components/Jokes'

import ProjectsContainer from './components/ProjectsContainer'

const Routes = props => (
  <Router history = {browserHistory}>
    <Route path='/' component={Root}>
      <IndexRedirect to='/projects' />
      <Route path='/projects' component={ProjectsContainer} />
      <Route path='/login' component={Login} />
      <Route path='/jokes' component={Jokes} />
    </Route>

    <Route path='*' component={NotFound} />
  </Router>

)

const mapDispatch = dispatch => ({

})

export default connect(null, mapDispatch)(Routes)
