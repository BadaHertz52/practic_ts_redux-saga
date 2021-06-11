import { combineReducers } from "redux";
import github from './github/reducer';
import {all} from '@redux-saga/core/effects';
import { githubSaga } from './github';

const  rootReducer = combineReducers({github});
export default rootReducer ;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga(){
  yield all ([githubSaga()])
};
