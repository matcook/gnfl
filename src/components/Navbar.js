import React from "react";
import { Link } from "@reach/router";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          background: isCurrent ? "red" : "",
        },
      };
    }}
  />
);

const Navbar = () => {
  return (
    <nav id="main-nav">
      <div className="container">
        <div>GNFL</div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/fixtures">Fixtures/Results</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div>GNWFL</div>
      </div>
    </nav>
  );
};

export default Navbar;
