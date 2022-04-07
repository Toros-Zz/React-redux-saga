import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="Header mb-3 p-2">
      <nav>
        <NavLink
          to="/"
          className={(isActive1) => 'button mr-4 ' + (isActive1.isActive ? ' is-active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="list"
          className={(isActive1) => 'button mr-4 ' + (isActive1.isActive ? ' is-active' : '')}
        >
          List
        </NavLink>
        <NavLink
          to="addPost"
          className={(isActive2) => 'button mr-4 ' + (isActive2.isActive ? ' is-active' : '')}
        >
          Add post
        </NavLink>
      </nav>
    </header>
  );
};
