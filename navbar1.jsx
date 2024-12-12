import React, { Component } from 'react';
import bookMyShowLogo from './bookmyshowlogo.png'; // Adjust the path
import searchIcon from './search.png'; // Adjust the path
import downarrow from './down-arrow.png'; // Adjust the path
import menu from './menu.png'; // Adjust the path

export class Navbar1 extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className='mainflex'>
          <div className='logosearch'>
            <img src={bookMyShowLogo} alt="logo" className='logo' />
            <div className="logosearch1">
              <img src={searchIcon} alt="" className='searchicon' />
              <input type="text" placeholder='Search for movies, restaurants, etc.' className='searchbox' />
            </div>
          </div>
          <div className='cityandall'>
            <p className='vijayawada'>Giddalur</p>
            <img src={downarrow} alt="" className='arrow' />
            <button className='signin'>Sign In</button>
            <img src={menu} alt="" className='menu' />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar1;
