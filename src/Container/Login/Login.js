import React,{Component} from 'react';
import '../Signup/signup.css';
import {withRouter, Route} from 'react-router';
import {connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actions from '../../store/actions';
import * as actionsName from '../../store/actionsName';
import Loader from '../../Component/loader/loader';
import {NavLink,Link} from 'react-router-dom';
import CRoute from '../customRoute';


class Login extends Component
{
    state={
        email:'',
        password:'',
        login:false
    }   
    
    changeHandler=(event)=>
    {
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }


    submitHandler=(event)=>
    {
        event.preventDefault();

        this.props.login(this.state);
        this.props.history.replace('/');
        
    }
    render()
    {
        return(
            <div className="form-container">
               
                <h2 style={{color:"#1ab2b2"}}>
                    Login
                    
                </h2>
                <form onSubmit={this.submitHandler}>
                    <input type="email" name="email" placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.changeHandler}/>

                    <input type="password" name="password" placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.changeHandler}
                    autoComplete="off"/>

                    <button name="submit">
                        Login
                    </button>
                   
                </form>
                
            </div>
        )
    }
}
const mapPropToState=(state)=>
{
   return{}
}

const mapAction=(dispatch)=>
{
    return{
        login:(credentials)=>dispatch(actions.login(credentials))
       
    }
    
}
export default connect(mapPropToState,mapAction)(Login);

