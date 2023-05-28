import React from 'react';
import Select from './select/Select';

class Header extends React.Component {

  render() {
    return (
      <div className="header-wrap">
        <div className="container">
          <header className='header'>
            <div className="header__logo-wrap">
              <img className='header__logo' src={`${process.env.PUBLIC_URL}/logo2.png`} alt="Logo" />
            </div>
            Header
            <Select />
          </header>
        </div>
      </div>
    );
  }
};

export default Header;
