import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../style/header.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ContactMailIcon from "@material-ui/icons/ContactMail";
// import logo from "../Assets/Logo/color1-white_logo_transparent_background.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Header() {
  console.log("RENDERED");
  // menu functionality
  let [menu, SetMenu] = useState(false);
  let [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 100) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };
  }, []);

  // get location
  const location = useLocation();
  let getLocationRef = useRef(null);

  useEffect(() => {
    SetMenu(false);
  }, [location.pathname]);

  // disable scroll on menu expanded
  // useEffect(() => {
  // 	if (menu) {
  // 		document.body.classList.add("body-disabled");
  // 	} else {
  // 		document.body.classList.remove("body-disabled");
  // 	}
  // }, [menu]);

  return (
    <div
      ref={getLocationRef}
      className={`header__container ${menu && "header__container--expanded"} ${
        scrollY && "header__container--enlarged"
      }`}
    >
      <div className="header__miniContainer">
        <div
          className={`header__socialMediaContainer ${
            scrollY && "header__social--enlarged"
          }`}
        >
          <p className="header__socialMediaText">Ne gasesti pe:</p>
          <div className="headerSocialMediaIconsContainer">
            <a
              href="https://www.facebook.com/profile.php?id=100063591846277"
              alt="Facebook Icon"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FacebookIcon className="headerSocialMediaIcons" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063591846277"
              alt="Instagram Icon"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <InstagramIcon className="headerSocialMediaIcons" />
            </a>
          </div>
        </div>
        <HashLink to="/#topHome">
          <div className="header__companyName">S.C. SAMUDACHPRO S.R.L.</div>
          {/* <img
            className={`header__logo ${scrollY && "header__logo--enlarged"}`}
            src={logo}
            alt="Logo"
          /> */}
        </HashLink>
        {!menu ? (
          <MenuIcon
            onClick={() => {
              SetMenu(!menu);
            }}
            className="header__hamburgerIcon"
          />
        ) : (
          <CloseIcon
            onClick={() => {
              SetMenu(!menu);
            }}
            className="header__hamburgerIcon"
          />
        )}

        <HashLink
          to="/contact#contactForm"
          className={`header__quoteContainer ${
            scrollY && "header__quote--enlarged"
          }`}
        >
          <p className="header__requestQuote">Cere o simulare de pret</p>
        </HashLink>
      </div>

      <ul className="header__itemsContainer">
        <HashLink smooth to="/#topHome">
          <li className="header__item">
            <HomeIcon />
            Acasă
          </li>
        </HashLink>
        <HashLink smooth to="/about#topAbout">
          <li className="header__item">
            <InfoIcon />
            Despre noi
          </li>
        </HashLink>
        <HashLink smooth to="/services#topServices">
          <li className="header__item">
            <SettingsApplicationsIcon />
            Servicii
          </li>
        </HashLink>
        <HashLink smooth to="/projects#topProjects">
          <li className="header__item">
            <AccountTreeIcon />
            Proiecte
          </li>
        </HashLink>
        <HashLink smooth to="/contact#topContact">
          <li className="header__item">
            <ContactMailIcon />
            Contact
          </li>
        </HashLink>
      </ul>
    </div>
  );
}

export default Header;
