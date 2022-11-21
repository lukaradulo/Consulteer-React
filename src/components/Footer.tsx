import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-[120px] bg-[#0a0a33]">
      <div className="border-[20px] border-[#3cd52e] p-[4vmin]">

        <h2 className="w-fit text-4xl leading-snug text-white font-['GTSuperText-Black'] mt-[72px]">
        The Future is bright.<br/>
        Stay relevant.
        </h2>

        <div className="flex flex-row justify-between items-center">
          <button className="my-8 ml-4 w-fit text-lg tracking-wider font-['Acumin-Bold'] shadow-contact border-[3px] border-[#3cd52e] bg-[#fdfdfd] pt-3 pr-6 pb-2.5 pl-7">
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
      </div>
    </footer>
  );
}

export default Footer;