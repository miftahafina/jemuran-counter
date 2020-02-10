import React from 'react';

const Header = (props) => {
  return (
    <div className="section header">
      <div className="header-title">
        <h1>Jemuran Counter</h1>
      </div>

      <div className="header-menu">
        <button onClick={() => props.handleReset()}>Reset</button>
      </div>
    </div>
  );
}

export default Header;
