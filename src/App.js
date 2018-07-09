import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import AdminRequest from './pages/AdminRequest.js';
import AdminKasir from './pages/AdminKasir.js';
import AdminUser from './pages/AdminUser.js';
import AdminAdmin from './pages/AdminAdmin.js';
import Kasir from './pages/Kasir.js';
// import Mekanik from './pages/Mekanik.js';
import User from './pages/User.js';
import UserRequest from './pages/UserRequest.js';
import NotFound from './pages/NotFound.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />

          <Redirect from="/admin" to="/admin-request"/>
          <Route path='/admin-request' component={AdminRequest} />
          <Route path='/admin-kasir' component={AdminKasir} />
          <Route path='/admin-user' component={AdminUser} />
          <Route path='/admin-admin' component={AdminAdmin} />

          <Route path='/kasir' component={Kasir} />
          {/* <Route path='/mekanik' component={Mekanik} /> */}

          <Route path='/user' component={User} />
          <Route path='/user-request' component={UserRequest} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
