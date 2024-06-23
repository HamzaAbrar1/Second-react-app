import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Header() {
  return (
    <div className="somec">
      <div className="firstbutton">
        <NavLink  to="/" activeClassName="active-link">
          Home
        </NavLink>
      </div>
      <div className="secondbutton">
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
      </div>
      <div className="thirdbutton">
        <NavLink to="/contact" activeClassName="active-link">
          Contact us
        </NavLink>
      </div>


      <div className="fourtbutton">
        <NavLink to="/appPart" activeClassName="active-link">
          App
        </NavLink>
      </div>
      
    </div>
  );
}
