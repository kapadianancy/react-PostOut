import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';



class customeRoute extends Component{
    render()
    {
        const {activeClassName,exact,to,component} =this.props;
        let link=null;
        switch(to)
        {
            case "/":
                {
                    link=(<NavLink to={to} activeClassName={activeClassName} exact>{this.props.children}</NavLink>);
                    break;
                }
            case "/addpost":
            {
                if(this.props.token!=null)
                {
                    link=(<NavLink to={to} activeClassName={activeClassName} exact>{this.props.children}</NavLink>);
                }
                break;
            }
            case "/signup":
                {
                    if(this.props.token==null)
                    {
                        link=(<NavLink to={to} activeClassName={activeClassName} exact>{this.props.children}</NavLink>);
                    }
                
                break;
                }
            case "/login":
                {
                    if(this.props.token==null)
                    {
                        link=(<NavLink to={to} activeClassName={activeClassName} exact>{this.props.children}</NavLink>);
                    }
                
                break;
                }
            case "/logout":
                {
                    if(this.props.token!=null)
                    {
                        link=(<NavLink to={to} activeClassName={activeClassName} exact>{this.props.children}</NavLink>);
                    }
                    break;
                }

        }
       
        
        return(
            <>
            {link}            
            </>
        )
        
    }
}

const mapStateToProps=(state)=>
{
    return {
        token:state.auth.token
    }
}

export default connect(mapStateToProps)(customeRoute);