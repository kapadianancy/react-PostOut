import React,{Component} from 'react';

import {withRouter, Route} from 'react-router';
import {connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actions from '../store/actions';
import * as actionsName from '../store/actionsName';



class logout extends Component
{
   
    componentWillMount()
    {
        this.props.logout();
    }
    render()
    {
        return(
            <div>
                <Redirect to="/"/>
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
        logout:()=>dispatch({type:actionsName.LOGOUT})
       
    }
    
}
export default connect(mapPropToState,mapAction)(logout);

