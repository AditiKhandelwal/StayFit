import React, { Component } from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Profile from './Profile'
import TaskList from './List'
class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/list" component={TaskList} />
          <Redirect from='*' to='/dashboard' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main