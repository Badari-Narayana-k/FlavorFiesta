import React from "react";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [lgnbtn, setLgnBtn] = useState("Login");
  const { carts } = useSelector((state) => state.allCart);

  const handleLogin = () => {
    setLgnBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  return (
    <nav className="bg-[#1c3155] shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} className="h-10" alt="Flowbite Logo" />
          </Link>

          <button
            // Rest of your button code here...
          >
            {/* Your button content here... */}
          </button>

          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link
                to="/"
                className="nav-link text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/viewres"
                className="nav-link text-white"
              >
                Restaurants
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="nav-link text-white"
              >
                {lgnbtn}
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className="nav-link text-white"
              >
                Signup
              </Link>
            </li>

            <li>
              <NavLink to="/cart" className="nav-link text-white">
                <div id='ex4'>
                  <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                    <i className="fa-solid fa-cart-shopping text-white"></i>
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
