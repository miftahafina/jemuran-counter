import React from 'react';

const Header = (props) => {
  let resetButton;

  if (props.handleReset) {
    resetButton = <button onClick={() => props.handleReset()}>Reset</button>;
  }

  return (
    <div className="section header">
      <div className="header-title">
        <h1>{props.title}</h1>
      </div>
      
      <div className="header-menu">
      {resetButton}
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: 'Jemuran Counter'
}

export default Header;
