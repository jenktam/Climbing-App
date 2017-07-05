import React from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'
import WhoAmI from '../components/WhoAmI'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Root = ({ user, children }) => (
  <div id="wrap">
    <Navbar />
    <nav>
      {user ? <WhoAmI/> : <Login/>}
    </nav>
    <div className="container">
      {children}
    </div>

    <Footer />
  </div>
)

export default connect(
  ({ auth }) => ({ user: auth }),
  null)(Root)
