import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand" href="/info">
        JoelCook
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link" href="/">
              Recipes
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/search">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
