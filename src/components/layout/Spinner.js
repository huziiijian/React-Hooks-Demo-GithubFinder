import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  //Fragments的简介声明方法,相当于空标签
  <>
    <img
      src={spinner}
      alt="loading..."
      style={{ display: 'block', width: '200px', margin: 'auto' }}
    />
  </>
);

export default Spinner;
