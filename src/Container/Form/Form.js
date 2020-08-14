import React,{Component} from 'react';
import './form.css';
import {connect } from 'react-redux';
//import {Redirect} from 'react-router-dom';
import * as actions from '../../store/actions';
import * as actionsName from '../../store/actionsName';
import Loader from '../../Component/loader/loader';


class Form extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            title:'',
            content:''
        }
    }

    changeHandler=(event)=>
    {
        if(event.target.name==="title")
        {
            this.setState({
                title:event.target.value,
            })
        }
        else if(event.target.name==="content")
        {
            this.setState({
                content:event.target.value
            })
        }
    }

    submitHandler=(event)=>
    {
        event.preventDefault();
        //simple redux
        //this.props.addPost(this.state.title,this.state.content);
        
        //firebase
        this.props.setLoading(true);
        let data={
            id:Math.floor(Math.random()*100),
            title:this.state.title,
            content:this.state.content,
        }
        this.props.postData(data,this.props.token);
        
        //this.props.history.replace('/');
    }

    
    render()
    {
        return(
            
            <div className="form-container">
            {this.props.token==null?this.props.history.replace('/signup'):null}
            {this.props.flag==1?this.props.history.replace('/'):null}
            {this.props.loading?<Loader/>:null}
               
                <h2 style={{color:"#1ab2b2"}}>
                    Add new Post
                </h2>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="title" placeholder="Enter Title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                    autoComplete="off"/>

                    <textarea name="content" placeholder="Enter Content"
                    value={this.state.content}
                    onChange={this.changeHandler}/>

                    <button name="submit">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}
const mapPropToState=(state)=>
{
    return {
        posts:state.posts.posts,
        loading:state.posts.loading,
        flag:state.posts.flag,
        token:state.auth.token
    }
}

const mapAction=(dispatch)=>
{
    return{
        addPost:(title,content)=>dispatch({type:actionsName.ADD_POST,title:title,content:content}),
        postData:(data,token)=>dispatch(actions.postData(data,token)),
        setLoading:(status)=>dispatch({type:actionsName.SET_LOADING,status:status})
    }
}
export default connect(mapPropToState,mapAction)(Form);

