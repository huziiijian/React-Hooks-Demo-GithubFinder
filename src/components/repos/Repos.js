import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({repos}) => {
  //等App组件的getUserRepos被调用后才有repos数据,所以头两次为空,共打印三次
  console.log(repos)
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
