import { LinkedIn } from "@mui/icons-material";
import React from "react";
import './About.scss';
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  const boardColumn = (name: string, position: string): JSX.Element => {
    return (
      <div className="column">
        <div className="person">
          <LinkedIn sx={{ marginRight: '4px', fontSize: 30 }}/>
          <div className="name">{name}</div>
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
        <h1>{t("About")} <span>{t("Extra")}</span>{t("ordinary")}.</h1>
        <p>{t("Business is not about...")}</p>
      </div>

      <div className="description">
        <h2>{t("Who we are.")}</h2>
        <p>{t("Consulteer is one of...")}</p>
      </div>

      <ChatBubble />

      <div className="description-second">
        <h2>{t("Becoming who we are.")}</h2>
        <p>
          {t("Consulteer in its...")}
          <br/><br/>
          {t("With Consulteer...")}
          <br/><br/>
          {t("We make human. technology. together.")}</p>
      </div>

      <h3>{t("Board of Directors")}</h3>
      <div className="directors-board">
        {boardColumn('Dominic Schindler', 'Founder & Chairman')}
        {boardColumn('Maurus Riedweg', 'Founder & CEO')}
        {boardColumn('Francois-Pierre Vivot', 'Founder & CSO')}
      </div>

      <h3>{t("Executive Board")}</h3>
      <div className="executives-board">
        {boardColumn('Yves Ackermann', 'CEO Switzerland')}
        {boardColumn('Christian Andres', 'CEO Germany & Austria')}
        {boardColumn('Djordje Velickovic', 'COO Serbia & Portugal')}
        {boardColumn('Aleksandra Grek Kovacevic', 'Head of Finance')}
        {boardColumn('Kathrin Speidel', 'Head of HR')}
        {boardColumn('Goran Lazarevic', 'Managing director Fusion')}
      </div>

      <div className="values">
        {valuesColumn(t('WE CARE'), t('ON THE GROUND LEADERSHIP'), false)}
        {valuesColumn(t('ACCOUNTABILITY & COMMITMENT'), t('HOW WE PLAY'), true)}
        {valuesColumn(t('PEOPLE FIRST'), t('ALL FOR ONE'), false)}
      </div>

      <h1>{t("Human. Technology.")} <span>{t("Together.")}</span></h1>
      <div className="conduct-code">
        <h3>{t("next")}</h3>
        <ArrowForwardIcon sx={{ marginBottom: 0.4, fontSize: 24 }}/>
      </div>
    </div>
  );
};

export default About;