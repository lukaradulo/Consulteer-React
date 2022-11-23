import { LinkedIn } from "@mui/icons-material";
import React from "react";
import ChatBubble from "../components/ChatBubble";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const About: React.FC = () => {

  const boardColumn = (name: string, position: string): JSX.Element => {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-end">
          <LinkedIn sx={{ marginRight: '4px', fontSize: 40 }}/>
          <div className="font-['Acumin-Bold'] text-[24px]">{name}</div>
        </div>
        <div className="font-['Acumin-Light'] text-[17px] text-[#454545] mt-3">{position}</div>
      </div>
    );
  }

  const valuesColumn = (leftTitle: string, rightTitle: string, unevenColumn: boolean): JSX.Element => {
    return (
      <div className="grid grid-cols-3 gap-16">
        <div className={ `flex flex-col ${ unevenColumn ? 'col-span-2' :  ''}` }>
          <img src="https://via.placeholder.com/900" className="bg-blue-400 h-[330px] w-full object-cover" alt=""/>
          <div className="font-['Acumin'] text-[17px] mt-3">{leftTitle}</div>
        </div>
        <div className={ `flex flex-col ${ unevenColumn ? '' :  'col-span-2'}` }>
          <img src="https://via.placeholder.com/900" className="bg-slate-600 h-[330px] w-full object-cover" alt=""/>
          <div className="font-['Acumin'] text-[17px] mt-3">{rightTitle}</div>
        </div>
      </div>
    );
  }

  return(
    <div className="font-['Acumin'] text-[17px] mt-[150px]">
      <div className="">
        <h1 className="text-[64px] font-['GTSuperText-Black']">About <span className="text-[#3cd52e]">Extra</span>ordinary.</h1>
        <p className="text-[24px] text-[#2c2c2c] leading-[1.33em] mt-[30px]">Business is not about winning or losing. Business is a creative process in which you must constantly create, change, and adapt. Instead than focusing on the end result, we decided to focus on how we play.</p>
      </div>

      <div className="flex flex-col mt-[60px] max-w-[66%]">
        <h2 className="font-['GTSuperText-Black'] text-3xl leading-5">Who we are.</h2>
        <p className="font-['Acumin'] mt-10 leading-[1.41] text-[#2c2c2c]">Consulteer is one of the leading independent professional services firms, employing more than 250 people across 8 offices throughout Europe. We deliver world-class full service, end-to-end advisory & engineering services. Our clients range from global industry leaders to the many small and medium sized organizations that are fully dedicated in making extraordinary products.</p>
      </div>

      <ChatBubble />

      <div className="my-24 flex flex-col max-w-[66%]">
        <h2 className="text-[32px] font-['GTSuperText-Black'] leading-5">Becoming who we are.</h2>
        <p className="text-[#2c2c2c] font-['Acumin'] text-[17px] mt-[32px]">
          Consulteer in its current form was established in 2021 when Consulteer fully merged with Schindler Creations. Back in 2007 both enterprises started as a one-man show and no one would have ever thought we would become the trusted partner of so many organizations.
          <br/><br/>
          With Consulteer, we have changed the quality of our professional home. We went back to the future to become who we are. Together as one company we are able to provide a widely extended service portfolio across multiple industries, resulting in even greater success for our clients.
          <br/><br/>
          We make human. technology. together.</p>
      </div>

      <div className="text-[36px] font-['GTSuperText-Black'] mb-6">Board of Directors</div>
      <div className="grid grid-cols-3 gap-16 mb-20">
        {boardColumn('Dominic Schindler', 'Founder & Chairman')}
        {boardColumn('Maurus Riedweg', 'Founder & CEO')}
        {boardColumn('Francois-Pierre Vivot', 'Founder & CSO')}
      </div>

      <div className="text-[36px] font-['GTSuperText-Black'] mb-6">Executive Board</div>
      <div className="grid grid-cols-3 gap-8 mb-32">
        {boardColumn('Yves Ackermann', 'CEO Switzerland')}
        {boardColumn('Christian Andres', 'CEO Germany & Austria')}
        {boardColumn('Djordje Velickovic', 'COO Serbia & Portugal')}
        {boardColumn('Aleksandra Grek Kovacevic', 'Head of Finance')}
        {boardColumn('Kathrin Speidel', 'Head of HR')}
        {boardColumn('Goran Lazarevic', 'Managing director Fusion')}
      </div>

      <div className="grid gap-6 mb-36">
        {valuesColumn('WE CARE', 'ON THE GROUND LEADERSHIP', false)}
        {valuesColumn('ACCOUNTABILITY & COMMITMENT', 'HOW WE PLAY', true)}
        {valuesColumn('PEOPLE FIRST', 'ALL FOR ONE', false)}
      </div>

      <h1 className="text-[48px] font-['GTSuperText-Black']">Human. Technology. <span className="text-[#3cd52e]">Together.</span></h1>
      <div className="flex flex-row items-start">
        <h3 className="mr-2">NEXT - CODE OF CONDUCT</h3>
        <ArrowForwardIcon/>
      </div>
    </div>
  );
};

export default About;