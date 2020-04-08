import {
  SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS
} from '../types';

export default (state, action) => {
  switch (action.type) {//dispatch传递的类型
    case SEARCH_USERS:
      console.log(state)
      return {
        ...state,//已经改变了状态就得返回状态
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
