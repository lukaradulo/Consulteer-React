import React, { useEffect, useState } from "react";
import './Navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(true);
  // const navItems: HTMLElement = document.getElementById("nav-items")!; 
  const [navItems, setNavItems] = useState<HTMLElement>(document.getElementById("nav-items")!);

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
          <li className="first-li">HOME</li>
          <li>EXPERTISE</li>
          <li>INDUSTRIES</li>
          <li>CAREER</li>
          <li className="last-li">CONTACT</li>
        </ul>

        <div className="nav-socials">
          <InstagramIcon sx={{ fontSize: 50, color: 'white', marginRight: 1 }}/>
          <LinkedInIcon sx={{ fontSize: 50, color: 'white' }}/>
        </div>
      
        <h2>The Future is bright.<br/>Stay relevant.</h2>
        <button>CONTACT</button>
        
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