import { combineReducers } from 'redux';
const mainPage = (state = 'recom', action) => {
  if (action) {
    state = action.page;
  }
  return state;
}

const reducer = combineReducers({ mainPage });
export default reducer
