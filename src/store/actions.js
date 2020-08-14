import axios from 'axios';
import * as actionsName from './actionsName';

const apikey="AIzaSyBgw1g2KTifgt5GL_T_ftXqN70DvQNlH5Y";
const urlAuth="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+apikey;
const urlPost="https://react-posts-e7088.firebaseio.com/posts.json";

export const displayData=(token)=>
{
    return (dispatch)=>
    {
        axios.get(urlPost+"auth="+token).then(res=>
            {
                let posts=[];
                if(res.data==null)
                {
                    return ;
                }
                for(let key in res.data)
                {
                    //console.log(res.data[key]);
                    let p=res.data[key];
                    //console.log(p);
                    posts.push(p);
                }
                
                dispatch(display(posts));
            }).catch(err=>
                {
                    console.log(err);

                });
    }
}

const display=(data)=>
{
    return {
        type:actionsName.DISPLAY_DATA,
        data:data
    }
}

export const postData=(data,token)=>
{
    return (dispatch)=>
    {
        axios.post(urlPost+"?auth="+token,data).then(res=>
            {
                dispatch(post(data));
            }).catch(err=>
                {
                    console.log(err);
                })
    }
}

const post=(data)=>
{
    return {
        type:actionsName.POST_DATA,
        data:data
    }
}

export const deletePost=(id,token)=>
{
    return dispatch=>
    {
        axios.delete(urlPost+"?auth="+token+"&id="+id)
        .then(res=>
            {
                //console.log(res);
                dispatch(deleted(id));
            }).catch(err=>
                {
                    console.log(err);
                })
    }
    

}

const deleted=(id)=>
{
    return{
        type:actionsName.DELETE_POST,
        id:id
    }
}

export const signup=(credentials)=>
{
    let c={...credentials,returnSecureToken:true}
    return dispatch=>
    {
        axios.post(urlAuth,c).
        then(res=>
            {
                console.log(res);
                let u={
                    userid:res.data.localId,
                    email:res.data.email,
                    token:res.data.idToken
                }
                dispatch(sign(u));
            }).catch(err=>
                {
                    console.log(err);
                })
    }
}

const sign=(data)=>
{
    return{
        type:actionsName.SIGN_UP,
        credentials:data
    }
}

export const login=(credentials)=>
{
    let c={...credentials,returnSecureToken:true};
    let url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+apikey;
    return dispatch=>
    {
        axios.post(url,c).
        then(res=>
            {
                console.log(res);
                let u={
                    userid:res.data.localId,
                    email:res.data.email,
                    token:res.data.idToken
                }
                dispatch(log(u));
            }).catch(err=>
                {
                    console.log(err);
                })
    }
}
const log=(credentials)=>
{
    return{
        type:actionsName.LOGIN,
        credentials:credentials 
    }
}