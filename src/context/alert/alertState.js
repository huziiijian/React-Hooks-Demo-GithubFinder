//记录被抽离的方法,处理事件,提交到alertReducer后返回最新状态

import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  // 初始化状态,可用一个对象涵盖多个属性
  const initialState = null;

  // state代表拿到的状态,dispatch代表提交状态的方法
  // 发送给AlertReducer的状态有initialState
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // 实现方法
  const showAlert = (msg, type) => {
    // State文件里是对方法对状态经历逻辑的阐述,当状态发生改变时便dispatch派发给reducer,
    // 而reducer(还原)里就是根据传来的值对状态进行判断和赋值,reducer里改变了的都要还回去.
    dispatch({//type代表判断类型,payload代表更改状态的方法,{ msg, type }就是形参
      type: SET_ALERT,
      payload: { msg, type }
    });
    //此时状态会被更改成null,因此不需要用payload,只需要在alertReducer里返回null即可.相当于payload:null
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);
  };
  //再将从alertReducer返回的最新数据渲染到界面
  return (
    //Provider 接收一个 value 属性，传递给消费组件
    //声明alert属性赋state值,和声明showAlert方法,接下来再分别传给Alert组件和Search组件
    <AlertContext.Provider value={{ alert: state, showAlert }}>
      {/* props.children就是组件被引用时开始/结束标签中的内容,这里为空 */}
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
















