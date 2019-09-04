import { combineReducers } from 'redux';
import { SWITCH_MAIN_PAGE } from './types';
const mainPage = (state = 'recom', action) => {
  switch (action.type) {
  case SWITCH_MAIN_PAGE:
    return action.page;
  default:
    return state;
  }
}
const reducer = combineReducers({ mainPage });
export default reducer
