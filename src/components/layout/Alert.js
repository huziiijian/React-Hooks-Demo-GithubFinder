import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  //接收一个 context 对象(React.createContext 的返回值)并返回该 context 的当前值
  //context 值由上层组件中距离当前组件最近的 <***.Provider> 的 value prop 决定
  const alertContext = useContext(AlertContext);
  //拿到AlertState中AlertContext.Provider的value的alert
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
