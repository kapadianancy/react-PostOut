import React, { Component } from 'react';
import './home.css';
import {connect}  from 'react-redux';
import * as actions from '../store/actions';
import * as actionsName from '../store/actionsName';
import Loader from '../Component/loader/loader';

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.posts=[];
    }
    
    componentWillMount()
    {
        //redux
        //this.props.displayPost();
        
        //firebase
        
        this.props.displayData(this.props.token);
        console.log("home");
        console.log(this.props.posts);
    }

    clickHandler=(event,id)=>
    {
        event.preventDefault();
        alert("your post will be deleted");
        this.props.setLoading(true);
        this.props.deletePost(id,this.props.token);


    }
    render()
    {
        const style={
            fontWeight:'bold',
            color:'#1ab2b2'
        }

        let displayposts=[];
        this.props.posts.map((p)=>
        {
            displayposts.push(
                <div className="container" key={p.id}>
                    <p><span style={style}>Title: </span>{p.title}</p>
                    <p><span style={style}>Content: </span>{p.content}</p>
                    <p><span className="button" 
                        onClick={(event)=>this.clickHandler(event,p.id)}>x Remove Post</span></p>
                </div>   
            ); 
            
            
            return displayposts;
        })
        return (
            <>
            
            {this.props.loading?<Loader/>:null}
              {displayposts} 
            </>

        )
    }
    
}

const mapPropToState=(state)=>
{
    return{
        posts:state.posts.posts,
        loading:state.posts.loading,
        token:state.auth.token
    }
}
const mapAction=(dispatch)=>
{
    return {
        displayPost:()=>dispatch({type:actionsName.DISPLAY_POST}),
        displayData:()=>dispatch(actions.displayData()),
        deletePost:(id,token)=>dispatch(actions.deletePost(id,token)),
        setLoading:(status)=>dispatch({type:actionsName.SET_LOADING,status:status})
    }
}

export default connect(mapPropToState,mapAction)(Home);