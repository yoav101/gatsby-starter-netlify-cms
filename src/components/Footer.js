import * as React from "react";
import mobileApp from "../img/footer/mobile-app.svg";
import topApp from "../img/footer/top-app.svg";
import topMobile from "../img/footer/top-mobile.svg";
import { SocialIcon } from "react-social-icons";
import "./Footer.sass";

const Footer = () => {
  return (
    <footer
      className="footer has-text-white-ter"
      style={{ backgroundColor: "#3F3C55" }}
    >
      <div className="content has-text-centered has-text-white-ter">
        <div className="container has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="achievements_footer">
              <a
                href="https://www.softwareworld.co/top-mobile-app-development-companies/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={mobileApp} alt="achievement1" />
              </a>
              <a
                href="https://topappdevelopmentcompanies.com/il/directory/app-developers/israel"
                target="_blank"
                rel="noreferrer"
              >
                <img src={topApp} alt="achievement2" />
              </a>
              <a
                href="https://topmobileappdevelopmentcompanies.com/top-mobile-application-development-companies"
                target="_blank"
                rel="noreferrer"
              >
                <img src={topMobile} alt="achievement3" />
              </a>
            </div>
            <div className="socials_footer">
              <div>Connect with us!</div>
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
            <div className="rights_footer">
              © 2022 by MSApps. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
