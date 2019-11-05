import React from 'react';
import Logo from "../../images/logo.png"


export default class NavBar extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <a>
              <img className="nb-logo" src={Logo} alt="logo" />
            </a> 
          </li>
          <li>
            <a className="nb-conta" href="./">
              Account  
            </a>
          </li>
          <li>
            <a className="nb-logout" href="./">
              Logout  
            </a>
          </li>
        </ul>
      </header>
    )
  }
}
