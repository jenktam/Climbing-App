import React from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'
import WhoAmI from '../components/WhoAmI'

const Root = ({ user, children }) => (
  <div>
    <nav>
      {user ? <WhoAmI/> : <Login/>}
    </nav>
    {children}
  </div>
)

export default connect(
  ({ auth }) => ({ user: auth }),
  null)(Root)
