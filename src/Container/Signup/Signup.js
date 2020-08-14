import React,{Component} from 'react';
import './signup.css';
import {withRouter, Route} from 'react-router';
import {connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actions from '../../store/actions';
import * as actionsName from '../../store/actionsName';
import Loader from '../../Component/loader/loader';
import {NavLink,Link} from 'react-router-dom';
import Login from '../Login/Login';
import CRoute from '../customRoute';


class Signup extends Component
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

    clickHandler=(event)=>
    {
        event.preventDefault();
        this.setState({login:true});
        
    }

    submitHandler=(event)=>
    {
        event.preventDefault();

        this.props.signup(this.state);
        this.props.history.replace('/');
        
    }
    render()
    {
        return(

            
            <div className="form-container">
               {this.state.login?<Redirect to="/login"/>:null}
                <h2 style={{color:"#1ab2b2"}}>
                    Create new account
                    
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
                        SignUp
                    </button>
                   
                </form>
                <snap style={{color:"#1ab2b2",cursor:"pointer"}}
                onClick={this.clickHandler}>Already have an account?</snap>
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
        signup:(credentials)=>dispatch(actions.signup(credentials))
       
    }
    
}
export default connect(mapPropToState,mapAction)(Signup);

