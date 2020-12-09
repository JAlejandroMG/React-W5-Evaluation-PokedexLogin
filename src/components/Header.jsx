import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import UserData from './UserData';

export default function Header(props) {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link className="link" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="link" to="/registro">Registro</Link>
          </li>
          <li>
            <Link className="link" to="/pokedex">Pokedex</Link>
          </li>
        </ul>
        {
          props.user &&
          <UserData user={props.user} setUserFn={props.setUserFn} />
        }
      </nav>
    </header>
  );
}
