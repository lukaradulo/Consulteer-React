import React from "react";
import './Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const footerNav: string[] = [
  'HOME', 
  'EXPERTISE', 
  'ABOUT CONSULTEER', 
  'WORK',
  'INDUSTRIES',
  'CODE OF CONDUCT',
  'STORIES',
  'CAREER'
];

const footerCities: string[] = [
  'LUCERNE',
  'BELGRADE',
  'RHINE VALLEY',
  'ZURICH',
  'ZRENJANIN',
  'PORTO',
  'MUNICH',
  'NOVI SAD',
  'LJUBLJANA'
];

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="top-part">
        <div className="links">
          <ul>
            {footerNav.map(nav => {
                return (<li className="ul-nav">{nav}</li>)
              })}
          </ul>

          <ul>
            {footerCities.map(city => {
              return (<li className="ul-cities">{city}</li>)
            })}
          </ul>
        </div>
        
        <div className="socials">
          <InstagramIcon style={{ fontSize: '50px' }}/>
          <LinkedInIcon style={{ fontSize: '50px' }}/>
        </div>
      </div>

      <h2>
        The Future is bright.<br/>
        Stay relevant.
      </h2>

      <div className="bottom-part">
        <button>CONTACT</button>

        <ul>
          <div className="links">
            <li>Imprint</li>
            <li>Privacy</li>
          </div>
          <div className="links">
            <p>Copyright 2022 Consulteer</p>
            <img src="heart.svg" alt=""/>
          </div>
          <div className="scroll-up">BACK TO TOP</div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;