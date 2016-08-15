import { combineReducers } from 'redux';
import PostReducer from './post_reducer';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  posts: PostReducer,
  auth: AuthReducer,
});

export default rootReducer;
