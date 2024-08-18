import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo-no-background.svg"

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 md:shadow-sm md:shadow-pink-900">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/"> HOME </Link></li>
              <li><Link to="/About-us"> ABOUT US </Link></li>
              <li><Link to="/Resources"> RESOURCES </Link></li>
              <li><Link to="/#contact" > CONTACT US </Link></li>
              <li><a href='https://t.me/+vbS5sENjD5c0YzI1' target="_blank"> JOIN COMMUNITY </a></li>
            </ul>
          </div>
          
          {/*<a className="google-font logo md:ml-8">skillUp</a>*/}
          <img src={logo} alt="Logo" className="md:ml-8 md:h-16 md:w-40 h-14 w-28 ml-16"/>
        </div>
        <div className="navbar-right hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/"> HOME </Link></li>
            <li><Link to="/About-us"> ABOUT US </Link></li>
            <li><Link to="/Resources"> RESOURCES </Link></li>
            <li><Link to="/#contact"> CONTACT US </Link></li>
            <li><a href='tg://resolve?domain=SkillUp360' target="_blank"> JOIN COMMUNITY </a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
