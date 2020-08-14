
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {Provider}  from 'react-redux';

import thunk from 'redux-thunk';
import postReducer from './Reducer/postReducer';
import authReducer from './Reducer/authReducer';

const rootReducer=combineReducers({
    posts:postReducer,
    auth:authReducer
});

let initial_state={
    auth:
    {
        userid:null,
        email:null,
        token:null,
    }
}
if(localStorage.getItem("token"))
{
    initial_state={
        auth:
        {
            userid:null,
            email:null,
            token:localStorage.getItem("token")
        }
    }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,initial_state,composeEnhancers(applyMiddleware(thunk)));

export default store;