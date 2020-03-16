//采用有状态组件写法
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'//无须层层写,会自动找到
import Users from './components/users/Users'
import User from './components/users/User'
import axios from 'axios'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

export default class App extends Component {

  state = {//注意有些变量不需要响应，无须增加响应式挂载
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos:[]
  }

  searchUsers1 = async text => {//箭头函数async写法
    this.setState({ loading: true })//注意更改状态用setState
    const res = await axios.get(`https://api.github.com/search/users?q=
    ${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res)
    this.setState({ users: res.data.items, loading: false })
  }

  getUser = async login => {//箭头函数async写法
    this.setState({ loading: true })//注意更改状态用setState
    const res = await axios.get(`https://api.github.com/users/${login}
    ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret
    =${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false })
    console.log(this.state.user)
  }

  getUserRepos = async login => {//箭头函数async写法
    this.setState({ loading: true })//注意更改状态用setState
    const res = await axios.get
    (`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: res.data, loading: false })
    console.log(res)
  }

  clearUsers = () => { this.setState({ users: [], loading: false }) }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 2000)
  }

  // 取消默认展示
  // async componentDidMount() {//生命周期函数
  //   this.setState({ loading: true })//注意更改状态用setState
  //   const res = await axios.get(`https://api.github.com/users?
  //   client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   console.log(res)
  //   this.setState({ users: res.data, loading: false })
  // }

  outterFunc = () => '321'//class的语法，不需function，方法间不需逗号隔开

  sex = 'man'//class的语法，属性直接声明

  render() {
    const { users, user, loading, alert, repos } = this.state;
    const title = "Github Finder";
    // const name = 'hu';
    // const showName = 0;
    // const innerFunc = () => '123';
    // if(name){
    //   return <h4>loading...</h4>
    // }
    return (
      // Fragments 可以让你聚合一个子元素列表，并且不在DOM中增加额外节点
      // <React.Fragment>
      //   {/* {/* <p>this.sex</p>
      //   <p>Hello {name}</p>
      //   <p>{innerFunc()}</p>
      //   <p>{this.outterFunc()}</p> */}
      //   {!name ? <h4>loading...</h4> : <p>Hello {showName && name}</p>} */}
      // </React.Fragment>
      <Router>
        <div className="App">
          <h1>
            <Navbar title={title} icon="fa fa-github" />
            <div className="container">
              <Alert alert={alert} />
              {/* <Search
                showClear={users.length > 0 ? true : false}
                searchUsers={this.searchUsers1}
                clearUsers={this.clearUsers}
                setAlert={this.setAlert}
              />
              <Users loading={loading} users={users} /> */}
              <Switch>
                <Route exact path="/" render={() => (
                  <Fragment>
                    {/* 这样写,嵌套的第二层组件才能给第三层组件传递属性 */}
                    <Search
                      showClear={users.length > 0 ? true : false}
                      searchUsers={this.searchUsers1}
                      clearUsers={this.clearUsers}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )} />
                <Route exact path="/about" component={About} />
                {/* :代表引用变量,下面这种写法适合传递属性 */}
                <Route exact path="/user/:login" render={props => (
                  //这个形参props里是history、location、match、staticContext等路由信息
                  //意思就是Route的默认属性都传递过来
                  <User {...props}
                    getUser={this.getUser} user={user} loading={loading}
                     getUserRepos={this.getUserRepos} repos={repos}>
                  </User>
                )} />
              </Switch>
            </div>
          </h1>
        </div>
      </Router>
    )
  }
}