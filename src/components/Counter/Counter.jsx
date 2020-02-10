import React, { Fragment } from 'react';

const Counter = (props) => {
  return (
    <Fragment>
      <div className="section display-counter">
        <div className="circle">
          <p className="number">{props.amount}</p>
          <small className="unit">jemuran</small>
        </div>
      </div>

      <div className="section btn-counter">
        <div className="btn btn-md ml-8">
          <button onClick={props.handleKurang}>Kurang</button>
        </div>
        <div className="btn btn-md ml-8">
          <button onClick={props.handleTambah}>Tambah</button>
        </div>
      </div>
    </Fragment>
  );
} 

export default Counter;
