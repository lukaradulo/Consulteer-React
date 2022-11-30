import React from "react";
import './Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerNav: string[] = [
    t('HOME'), 
    t('EXPERTISE'), 
    t('ABOUT CONSULTEER'), 
    t('WORK'),
    t('INDUSTRIES'),
    t('CODE OF CONDUCT'),
    t('STORIES'),
    t('CAREER')
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
        {t("The Future is bright.")}<br/>
        {t("Stay relevant.")}
      </h2>

      <div className="bottom-part">
        <button>{t("CONTACT")}</button>

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