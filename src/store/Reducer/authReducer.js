import * as actionNames from '../actionsName';

const apikey="AIzaSyBgw1g2KTifgt5GL_T_ftXqN70DvQNlH5Y";
const url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+apikey;


const initial_state={
    userid:null,
    email:null,
    //password:null,
    token:null,
    
}

const authReducer=(state=initial_state,action)=>
{
    switch(action.type)
    {
        case actionNames.SIGN_UP:
            {
                localStorage.setItem("token",action.credentials.token);
                return{
                    ...state,
                    userid:action.credentials.userid,
                    email:action.credentials.email,
                    token:action.credentials.token,
                    
                }
            }
        case actionNames.LOGIN:
            {
                localStorage.setItem("token",action.credentials.token);
                return{
                    ...state,
                    userid:action.credentials.userid,
                    email:action.credentials.email,
                    token:action.credentials.token,
                      
                }
            }
        case actionNames.LOGOUT:
            {
                localStorage.removeItem("token");
                return {
                    ...state,
                    userid:null,
                    email:null,
                    token:null
                }
            }
        default:
            return{
                ...state
            }
    }

}
export default authReducer;