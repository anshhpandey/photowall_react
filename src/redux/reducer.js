import posts from "../data/posts";
import {combineReducers} from 'redux'

function post(state=posts, action){
   switch (action.type){
    case 'REMOVE_POST' : return [...state.slice(0,action.index), ...state.slice(action.index+1)]
    case "ADD_POST" : return [...state, action.post]
    default : return state
   }
}

function comment(state={},action){
switch(action.type){
   
   case 'ADD_COMMENT':
    if(!state[action.postId]){
      return {...state, [action.postId]:[action.comment]}
    }
    else{
      return {...state, [action.postId] : [...state[action.postId], action.comment]}
    }
      // console.log(action.postId)   
  
   default: return state
}
}

const rootReducer = combineReducers({post,comment})
export default rootReducer;