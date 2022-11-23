import React from "react";
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
    <footer className="mt-[120px] bg-[#0a0a33] border-[20px] border-[#3cd52e] p-[4vmin]">
      <div className="flex flex-row justify-between items-start font-['Acumin'] font-base text-white">
        <ul className="grid grid-cols-3">
          {footerNav.map(nav => {
              return (<li className="mt-6">{nav}</li>)
            })}
        </ul>

        <ul className="grid grid-cols-3">
          {footerCities.map(city => {
            return (<li className="flex-[0_0_26%] mt-6">{city}</li>)
          })}
        </ul>
        
        <div className="flex flex-row mt-6">
          <InstagramIcon style={{ fontSize: '50px' }}/>
          <LinkedInIcon style={{ fontSize: '50px' }}/>
        </div>
      </div>

      <h2 className="w-fit text-4xl leading-snug text-white font-['GTSuperText-Black'] mt-[72px]">
      The Future is bright.<br/>
      Stay relevant.
      </h2>

      <div className="flex flex-row justify-between items-center">
        <button className="mt-8 mb-4 ml-4 w-fit text-lg tracking-wider font-['Acumin-Bold'] shadow-contact border-[3px] border-[#3cd52e] bg-[#fdfdfd] pt-3 pr-6 pb-2.5 pl-7">
          CONTACT
        </button>

        <ul className="flew flew-row items-center mt-12 flex flex-row font-['Acumin-Light'] text-white">
          <li className="mr-8 cursor-pointer">Imprint</li>
          <li className="mr-8 cursor-pointer">Privacy</li>
          <p>Copyright 2022 Consulteer</p>
          <img src="heart.svg" className="px-8" alt=""/>
          <div className="font-['Acumin-Bold'] text-[#3cd52e] cursor-pointer">BACK TO TOP</div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;