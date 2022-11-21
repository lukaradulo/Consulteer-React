import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-[#fdfdfd] flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <img src="nav-logo.png" className="h-[92px] ml-12 cursor-pointer" alt=""/>
      </div>
      <ul className="flex flex-row mt-2 font-['Acumin'] text-[17px] tracking-widest">
        <li className="mr-10 cursor-pointer">EXPERTISE</li>
        <li className="mr-10 cursor-pointer">INDUSTRIES</li>
        <li className="mr-10 cursor-pointer">CAREER</li>
        <li className="text-[#3cd52e] font-['Acumin-Bold'] mr-16 cursor-pointer">CONTACT</li>
      </ul>
    </div>
  );
}

export default Navbar;