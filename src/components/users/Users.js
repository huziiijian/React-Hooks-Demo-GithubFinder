import React, { useContext } from 'react';
import UserItem from './UserItem'
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

// class Users extends Component {//只起展示作用,改为无状态组件
const Users = () => {//注意解构顺序
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if(loading){
    return <Spinner/>
  }
    return (
      <div style={userStyle}>
        {users.map(user => (//通过props拿到父级state属性
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
}

const userStyle = {//引用时也注意不需要this了
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};


export default Users
