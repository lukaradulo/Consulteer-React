import React, { useEffect, useState } from "react";
import './Navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [navItems, setNavItems] = useState<HTMLElement>(document.getElementById("nav-items")!);
  const { t } = useTranslation();

  useEffect(() => {
    setNavItems(document.getElementById("nav-items")!);
  },[]);

  const openNav = () => {
    if (navItems.className === 'right-side') {
      navItems.className = "right-side-opened";
      setNavOpen(false);
    } else {
      navItems.className = "right-side";
      setNavOpen(true);
    }
  }

  return (
    <header className="navbar">
      <div className="left-side">
        <img src="nav-logo.png" alt=""/>
      </div>

      <div id="nav-items" className="right-side">
        <ul> 
          <li className="first-li">{t("HOME")}</li>
          <li>{t("EXPERTISE")}</li>
          <li>{t("INDUSTRIES")}</li>
          <li>{t("CAREER")}</li>
          <li className="last-li">{t("CONTACT")}</li>
        </ul>

        <div className="nav-socials">
          <InstagramIcon sx={{ fontSize: 50, color: 'white', marginRight: 1 }}/>
          <LinkedInIcon sx={{ fontSize: 50, color: 'white' }}/>
        </div>
      
        <h2>{t("The Future is bright.")}<br/>{t("Stay relevant.")}</h2>
        <button>{t("CONTACT")}</button>
        
        <div className="nav-footer"> 
          <p>Copyright 2022 Consulteer</p>
          <img src="heart.svg" className="px-8" alt=""/>
        </div>
      </div>

      <button id="nav-btn" className="burger" onClick={openNav}>
        { navOpen
          ? <MenuIcon sx={{ fontSize: 46, color: '#3cd52e' }}/>
          : <CloseIcon sx={{ fontSize: 52, color: '#3cd52e' }}/>
        }
      </button>
    </header>
  );
}

export default Navbar;