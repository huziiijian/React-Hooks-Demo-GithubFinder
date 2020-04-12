import {
  SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS
} from '../types';

export default (state, action) => {
  switch (action.type) {//dispatch传递的类型
    case SEARCH_USERS:
      console.log(state)
      return {
        ...state,//展开原有状态，改写部分状态，返回新状态
        users: action.payload,//dispatch传递的参数
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    default:
      return state;
  }
};
