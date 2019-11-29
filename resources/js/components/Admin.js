import React, {Component,Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

// import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Register from './Register'


class Admin extends Component {
    render() {
        return (

            <BrowserRouter>
            <Fragment>
              <Switch>
              <Route exact path='/login' render={(props) =>
              <Login {...props}/>} />
            {/* <Route exact path='/menu' component={Menu} /> */}
                {/* <Route exact path='/home' component={Home} /> */}
                <Route exact path='/home' component={Home} />
                {/* <Route exact path='/login' component={Login} /> */}
              </Switch>
            </Fragment>
          </BrowserRouter>
        )
    }
}

export default Admin
if (document.getElementById('admin')) {
    ReactDOM.render(<Admin/>, document.getElementById('admin'));
}
