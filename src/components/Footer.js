import * as React from "react";
import { Link } from "gatsby";
import { SocialIcon } from "react-social-icons";
import "./Footer.sass";

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/feedbacks">
                      Feedbacks
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/clients">
                      Clients
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="socials_footer">
              <SocialIcon
                url="https://www.linkedin.com/company/msapps/"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://m.facebook.com/msapps.mobi/"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://twitter.com/ms_apps11"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
