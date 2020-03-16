/*
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
    email: ''
  }
  onChange = e => {//注意修改state状态的方法最好用箭头函数写,能够保证this不变
    this.setState({ [e.target.name]: e.target.value })//setState修改的属性可以是包含形参的变量
    //这里的this指向Search类
  }
  onSubmit(e) {//这样写需要在引用处绑定this,并不推荐这种写法
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    }
    //1.拿到父组件传递的searchUsers方法
    //2.把子组件数据通过形参发送给父组件方法执行.这属于事件回调
    this.props.searchUsers(this.state.text)
    //如果不在事件调用时用bind(this)绑定,这里的this指向undefined
    this.setState({ text: '' })
  };
  static propTypes = {//验证props数据的有效性
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  }
  render() {
    const { showClear,clearUsers} = this.props;//通过解构减少代码量
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search user..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Search email..."
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {(showClear) && (//如果showClear为false,则返回false
          <button
            className="btn btn-light btn-block"
            onClick={clearUsers}
          //因为这里不需要传参,所以可以直接写,否则要么直接用
          //onClick={() => { this.props.clearUsers(****) }的写法
          //要么仿照onSubmit的写法,写在外面
          >
            Clear
        </button>
        )}
      </div>
    )
  }
}

export default Search
*/

import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
const { showAlert } = useContext(AlertContext);
const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');//设置属性和对应修改属性方式
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      showAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search user..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {(githubContext.users.length > 0) && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
