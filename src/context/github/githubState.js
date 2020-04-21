//记录被抽离的方法,处理事件,提交到alertReducer后返回最新状态

import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  // 使用本地环境变量,全局都可使用
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  // 生产环境变量,为了打包上线后能够访问
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

// 也可以将dispatch和state作为value传递给组件后再执行逻辑，这样的优点是更加直观，但封装度不高。
const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users
  const searchUsers = async text => {
    setLoading();//状态被改变
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
    //在reducer里处理setLoading(false)
  };

  // get user
  const getUser = async login => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // get repos
  const getUserRepos = async login => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{ // hooks函数发送方法和state，也可以发送dispatch和state，让UI组件自己处理方法逻辑。
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

















