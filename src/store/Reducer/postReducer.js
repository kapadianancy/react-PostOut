import * as actionsName from '../actionsName';
const initialState={
   posts:[
       {
           id:'1',
           title:'redux',
           content:'demo form redux'
       }
   ],
   loading:false,
   flag:0

}

const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case actionsName.DISPLAY_POST:
            return{
                ...state,
                posts:state.posts,
                flag:0
            }
        case actionsName.ADD_POST:
        {
            let p={
                id:Math.floor(Math.random()*100),
                title:action.title,
                content:action.content
            }
            let newposts=state.posts.concat(p);
            console.log(p);
            console.log(state.posts);
            return{
                ...state,
                posts:newposts,
                flag:0
            }
        }
        case actionsName.DISPLAY_DATA:
        {
            return{
                ...state,
                posts:action.data,
                flag:0
            }
            
        }
        case actionsName.POST_DATA:
        {
            let p={...action.data};
            let newposts=state.posts.concat(p);
            return{
                ...state,
                posts:newposts,
                loading:false,
                flag:1
            }
        }
        case actionsName.DELETE_POST:
            {
                let updated=state.posts.filter((p)=>p.id!==action.id);
                return {
                    ...state,
                    posts:updated,
                    loading:false
                }
            }
        case actionsName.SET_LOADING:
            return{
                ...state,
                loading:action.status
            }   
        default:
            return state;
    }

}

export default reducer;