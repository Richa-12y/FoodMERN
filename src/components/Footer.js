import React from "react";
import Logo from "../assest/img/icons8-parachute-64.png";
import LogoFacbook from "../assest/img/icons8-facebook-48.png";
import LogoTwitter from "../assest/img/icons8-twitter-48.png";
import LogoInstagram from "../assest/img/icons8-instagram-48.png";

const Footer = () => {
  const socielIcon = [LogoFacbook, LogoTwitter, LogoInstagram];
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img src={Logo} alt="logo" width={30} height={24} />
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2022 FeastDash, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#">
              {socielIcon.map((el, i) => {
                return (
                  <img
                    key={i}
                    src={el}
                    alt="socialmedi"
                    width={24}
                    height={24}
                  />
                );
              })}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
