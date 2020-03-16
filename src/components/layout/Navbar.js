/*改为无状态组件写法
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {

  // 静态属性和方法直接由类本身引用，而非对应对象实例。
  static defaultProps = {//静态属性
    title: "Github Finder",
    icon: "fa fa-github"
  }

  static propTypes = {//验证props数据的有效性
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} />{this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar
*/

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';//export不含default的属性需要用{}

//注意函数声明表达式写法不会函数提升!!!所以要注意位置

const Navbar = ({ icon, title }) => {//直接用解构写法,更简洁
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {//挂载属性到函数上
  title: "Github Finder",
  icon: "fa fa-github"
}

Navbar.propTypes = {//验证props数据的有效性
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;














