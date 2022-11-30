import React from "react";
import './Home.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  const workColumn = (leftTitle: string, rightTitle: string, unevenColumn: boolean): JSX.Element => {
    return (
      <div className="work-column">
        <div className={ `left-content${ unevenColumn ? '-large' :  ''}` }>
          <img src="https://via.placeholder.com/900" alt=""/>
          <h2>{leftTitle}</h2>
        </div>
        <div className={ `right-content${ unevenColumn ? '' :  '-large'}` }>
          <img src="https://via.placeholder.com/900" alt=""/>
          <h2>{rightTitle}</h2>
        </div>
      </div>
    );
  }

  const storiesColumn = (leftTitle: string, middleTitle: string, rightTitle: string): JSX.Element => {
    return (
      <ul className="stories-column">
        <li>
          <img src="https://via.placeholder.com/900" alt=""/>
          <h2>{leftTitle}</h2>
        </li>
        <li>
          <img src="https://via.placeholder.com/900" alt=""/>
          <h2>{middleTitle}</h2>
        </li>
        <li>
          <img src="https://via.placeholder.com/900" alt=""/>
          <h2>{rightTitle}</h2>
        </li>
      </ul>
    );
  }

  const column =(title: string, isWorkColumn: boolean): JSX.Element => {
    return(
      <div className="columns">
      <h2>{t(title)}</h2>
        {
        isWorkColumn
          ? <div className="grid">
            {workColumn('SWISS GOVERNMENT', 'WAVE CONTACT LENSES', false)}
            {workColumn('ARMASUISSE', 'UNITED GRINDING', true)}
            {workColumn('MEDICAL TECHNOLOGY', 'GRENZEBACH', false)}
          </div>
          : <div className="grid">
            {storiesColumn('NEW TECHNOLOGY CENTRE IN LJUBLJANA', 'CHAOS ENGINEERING', 'INTRODUCING CLOUD-NATIVE APPS')}
            {storiesColumn('AI IS ALL AROUND US', 'CONSULTEER ACQUIRES FUSION', 'CONSULTEER & SCHINDLER CREATIONS HAVE MERGED')}
          </div>
        }

        <div className="show-more">
          <img src="https://www.consulteer.com/assets/images/plus-starhunter.svg" alt=""/>
          <p>{`${t('SHOW MORE')} ${t(title).toUpperCase()}`}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='home'>
      <h1>{t("Human. Technology.")} <span>{t("Together.")}</span></h1>
      <h4>{t("We deliver full service...")}</h4>
      <h4>
        {t("Read more")} <Link to='/about-us'><span>{t("about Consulteer")}</span></Link>
      </h4>

      {column('Work', true)}

      {column('Stories', false)}
    </div>
  );
}

export default Home;