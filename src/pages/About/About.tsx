import { LinkedIn } from "@mui/icons-material";
import React from "react";
import './About.scss';
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const About: React.FC = () => {

  const boardColumn = (name: string, position: string): JSX.Element => {
    return (
      <div className="column">
        <div className="person">
          <LinkedIn sx={{ marginRight: '4px', fontSize: 40 }}/>
          <div>{name}</div>
        </div>
        <p>{position}</p>
      </div>
    );
  }

  const valuesColumn = (leftTitle: string, rightTitle: string, unevenColumn: boolean): JSX.Element => {
    return (
      <div className="values-columns">
        <div className={ `content${ unevenColumn ? '-large' :  ''}` }>
          <img src="https://via.placeholder.com/900" alt=""/>
          <div className="title">{leftTitle}</div>
        </div>
        <div className={ `content${ unevenColumn ? '' :  '-large'}` }>
          <img src="https://via.placeholder.com/900" alt=""/>
          <div className="title">{rightTitle}</div>
        </div>
      </div>
    );
  }

  return(
    <div className="about">
      <div className="top">
        <h1>About <span>Extra</span>ordinary.</h1>
        <p>Business is not about winning or losing. Business is a creative process in which you must constantly create, change, and adapt. Instead than focusing on the end result, we decided to focus on how we play.</p>
      </div>

      <div className="description">
        <h2>Who we are.</h2>
        <p>Consulteer is one of the leading independent professional services firms, employing more than 250 people across 8 offices throughout Europe. We deliver world-class full service, end-to-end advisory & engineering services. Our clients range from global industry leaders to the many small and medium sized organizations that are fully dedicated in making extraordinary products.</p>
      </div>

      <ChatBubble />

      <div className="description-second">
        <h2>Becoming who we are.</h2>
        <p>
          Consulteer in its current form was established in 2021 when Consulteer fully merged with Schindler Creations. Back in 2007 both enterprises started as a one-man show and no one would have ever thought we would become the trusted partner of so many organizations.
          <br/><br/>
          With Consulteer, we have changed the quality of our professional home. We went back to the future to become who we are. Together as one company we are able to provide a widely extended service portfolio across multiple industries, resulting in even greater success for our clients.
          <br/><br/>
          We make human. technology. together.</p>
      </div>

      <h3>Board of Directors</h3>
      <div className="directors-board">
        {boardColumn('Dominic Schindler', 'Founder & Chairman')}
        {boardColumn('Maurus Riedweg', 'Founder & CEO')}
        {boardColumn('Francois-Pierre Vivot', 'Founder & CSO')}
      </div>

      <h3>Executive Board</h3>
      <div className="executives-board">
        {boardColumn('Yves Ackermann', 'CEO Switzerland')}
        {boardColumn('Christian Andres', 'CEO Germany & Austria')}
        {boardColumn('Djordje Velickovic', 'COO Serbia & Portugal')}
        {boardColumn('Aleksandra Grek Kovacevic', 'Head of Finance')}
        {boardColumn('Kathrin Speidel', 'Head of HR')}
        {boardColumn('Goran Lazarevic', 'Managing director Fusion')}
      </div>

      <div className="values">
        {valuesColumn('WE CARE', 'ON THE GROUND LEADERSHIP', false)}
        {valuesColumn('ACCOUNTABILITY & COMMITMENT', 'HOW WE PLAY', true)}
        {valuesColumn('PEOPLE FIRST', 'ALL FOR ONE', false)}
      </div>

      <h1>Human. Technology. <span>Together.</span></h1>
      <div className="conduct-code">
        <h3>NEXT - CODE OF CONDUCT</h3>
        <ArrowForwardIcon sx={{ marginTop: 1.4, fontSize: 30 }}/>
      </div>
    </div>
  );
};

export default About;