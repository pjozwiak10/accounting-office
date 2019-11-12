import React from 'react';
import { NavLink } from 'react-router-dom';
import svg from '../images/accounting.svg';

const Navigation = (props) => {
  return (
    <nav className="nav" style={props.isActive ? { transform: 'translateX(0)' } : null}>
      <div className="nav__logo">
        <div className="nav__logo-image"><img className="img" src={svg} alt="logo" /></div>
        <div className="nav__logo-name">Biuro Rachunkowe <span>Prestige</span></div>
      </div>
      <ul className="nav__list">
        <li className="nav__list-item"><NavLink to="/" exact className="nav__link"><i className="fa fa-home" aria-hidden="true"></i>
          Start</NavLink></li>
        <li className="nav__list-item"><NavLink to="/usługi" className="nav__link"><i className="fa fa-list" aria-hidden="true"></i>Usługi</NavLink></li>
        <li className="nav__list-item"><NavLink to="/cennik" className="nav__link"><i className="fa fa-money" aria-hidden="true"></i>Cennik</NavLink></li>
        <li className="nav__list-item"><NavLink to="/kontakt" className="nav__link"><i className="fa fa-envelope" aria-hidden="true"></i>Kontakt</NavLink></li>
      </ul>
      <div className="nav__social-media">

      </div>
    </nav>
  );
}

export default Navigation;