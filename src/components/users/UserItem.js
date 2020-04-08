/*有状态组件
import React, { Component } from 'react'

class UserItem extends Component {

  render() {
    const { login, avatar_url, html_url } = this.props.user;//解构
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
            more
        </a>
        </div>
      </div>
    )
  }
}

export default UserItem*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">
          more
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {//propTypes属于一种静态属性,不被实例继承,直接用类调用
  user: PropTypes.object.isRequired
};

export default UserItem;














