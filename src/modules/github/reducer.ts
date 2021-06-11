import { createReducer } from "typesafe-actions";
import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_SUCCESS } from "./actions";
import {GithubState, GithubAction} from './types'

const initialState = {
  userProfile :{
    loading: false,
    data:null,
    error:null
  }
};

const github = createReducer
<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE] : (state) => ({
    ...state,
    userProfile:{
      loading:true,
      data:null,
      error:null
    }
  }),
  [GET_USER_PROFILE_SUCCESS] : (state, action) =>({
    ...state,
    userProfile:{
      loading:false,
      data: action.payload,
      error:null
    }
  }),
  [GET_USER_PROFILE_ERROR]:
  (state, action) => ({
    ...state ,
    userProfile:{
      loading:false,
      data:null,
      error:action.payload
    }
  }),
});

export default github;

//typesafe- action 개정 :creatReducer에서 <state, aciton> 쓰지 않아도 되지만 state type 을 쓰지 않으면 container 에서 data type이 null 로 잡힘 