import React, { Fragment } from 'react';
import Test1 from '../test/Test1.js'
import Test2 from '../test/Test2.js'
import Test3 from '../test/Test3.js'

const About = () => {

  const ref1 = React.createRef()
  console.log(ref1)

  return (
    <Fragment>
      <h1>ReactDemo</h1>
      <p>点击search查找github上真实用户,查看用户信息功能的小项目~</p>
      <div style={{color:"grey"}}>
        <Test1 />
        {/* 获取到了子组件的button节点 */}
        <Test2 ref={ref1}/>
        <Test3/>
      </div>
    </Fragment>
  );
};

export default About;

