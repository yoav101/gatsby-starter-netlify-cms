import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import logo from "../img/msapps-logo.svg";
import "./Navbar.sass";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");

  const toggleHamburger = () => {
    setActive(!active);
  };
  useEffect(() => {
    active ? setNavBarActiveClass("is-active") : setNavBarActiveClass("");
  }, [active]);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={logo}
              alt="MsApps"
              style={{
                width: "190px",
                height: "75px",
                maxHeight: "100px",
                marginRight: "130px",
              }}
            />
          </Link>
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            style={{ height: "6.25rem" }}
            onKeyPress={toggleHamburger}
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div
            className="navbar-start has-text-centered"
            style={{
              fontWeight: "500",
              fontSize: "16px",
              gap: "8px",
              color: "#000",
            }}
          >
            <Link className="navbar-item" to="/" activeClassName="activeRoute">
              Home
            </Link>
            <Link
              className="navbar-item"
              to="/about"
              activeClassName="activeRoute"
            >
              About
            </Link>
            <Link
              className="navbar-item"
              to="/feedbacks"
              activeClassName="activeRoute"
            >
              Feedbacks
            </Link>
            <Link
              className="navbar-item"
              to="/blog"
              activeClassName="activeRoute"
            >
              Blog
            </Link>
            <Link
              className="navbar-item"
              to="/contact"
              activeClassName="activeRoute"
            >
              Contact
            </Link>
            <Link
              className="navbar-item"
              to="/clients"
              activeClassName="activeRoute"
            >
              Clients
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
