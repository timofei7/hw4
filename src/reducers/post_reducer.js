import { ActionTypes } from '../actions';

const PostReducer = (state = { all: [], post: { title: '', tags: '', content: '' } }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, all: action.payload.all };
    case ActionTypes.FETCH_POST:
      return { ...state, post: action.payload.post };
    default:
      return state;
  }
};

export default PostReducer;
