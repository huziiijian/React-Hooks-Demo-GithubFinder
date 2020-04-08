import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'//无须层层写,会自动找到
import Home from './components/pages/Home';
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);
  // const [repos, setRepos] = useState([]);

  // const searchUsers1 = async text => {
  //   setLoading(true);
  //   const res = await axios.get(`https://api.github.com/search/users?q=
  //   ${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setUsers(res.data.items);
  //   setLoading(false);
  // }

  // const getUser = async login => {
  //   setLoading(true);
  //   const res = await axios.get(`https://api.github.com/users/${login}
  //   ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret
  //   =${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setUser(res.data);
  // }

  // const getUserRepos = async login => {
  //   setLoading(true);
  //   const res = await axios.get
  //     (`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setRepos(res.data);
  //   setLoading(false);
  // }

  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  // }

  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });
  //   setTimeout(() => { setAlert(null) }, 2000)
  // }

  return (//对本案例而言，交换位置没有影响
    // 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <h1>
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  {/* 将Search和Users抽离到单独组件,然后引用单独组件 */}
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:login" component={User} />
                  <Route component={NotFound} />{/* 不加exact */}
                </Switch>
              </div>
            </h1>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;