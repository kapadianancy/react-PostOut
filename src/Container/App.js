import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {connect}  from 'react-redux';
import {Route,NavLink,Switch} from 'react-router-dom';

import CRoute from './customRoute';
import Home from '../Component/Home';
import Form from './Form/Form';
import SignUp from './Signup/Signup';
import Login from './Login/Login';
import logout from '../Container/logout';
import errorPage from '../Component/errorPage';


class App extends Component {
  render()
  {
    
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo}/>
          <h1 className="heading">PostOut</h1>
          <ul className="menu">
            <li><CRoute to="/logout" activeClassName="active" exact>Logut</CRoute></li>
            <li><CRoute to="/signup" activeClassName="active" exact>SignUp/Login</CRoute></li>
            <li><CRoute to="/addpost" activeClassName="active" exact>Add Post</CRoute></li>
           <li><CRoute to="/" activeClassName="active" exact>Home</CRoute></li>
           
          </ul>
        </header>
        
       

          <Switch>
            
            <Route path="/addpost" exact component={Form}/>
            <Route path="/logout" exact component={logout}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/login" component={Login} exact/>
            <Route path="/" exact component={Home}/>
            <Route path="/*" component={errorPage} />
          </Switch>
       
      </div>
    );
  }
  
}
const mapStateToProps=(state)=>
{
  return{
    token:state.auth.token
  }
}


export default connect(mapStateToProps)(App);
