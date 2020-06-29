import React from 'react';
import { NavLink } from 'react-router-dom';
import DateTimeComponent from './DateTimeComponet';

const Header = () => (
  <header className='container header'>
    <div className='nav-container'>
      <NavLink 
        activeClassName='activeClass'
        className='navlink' 
        exact 
        to='/'
      >Home
      </NavLink>
      <NavLink 
        activeClassName='activeClass'
        className='navlink' 
        to='/dashboard'
      >Dashboard
      </NavLink>
      <NavLink 
        activeClassName='activeClass'
        className='navlink' 
        to='/about'
      >About
      </NavLink>
    </div>
    <DateTimeComponent />
  </header>
);

export default Header;