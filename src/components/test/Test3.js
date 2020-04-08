import React, { useState, useEffect } from 'react';

function Test3() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 如果不通过setState不仅无法进行渲染，且无法改变count的值 */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Test3;