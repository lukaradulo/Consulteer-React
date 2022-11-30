import React from "react";
import './ChatBubble.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from "react-i18next";

const ChatBubble: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="chat-bubble">
      <div className="top-corner"></div>
      <div className="bubble">
        <div>
          <h1>{t("All for One.")}</h1>
          <p>{t("All members of our...")}</p>
        </div>
        <div className="pages-number">
          <div>1/3</div>
          <div>
            <ArrowForwardIcon sx={{ fontSize: '22px', transform: 'rotate(180deg)' }}/>
            <ArrowForwardIcon sx={{ color: '#5cdc3c', fontSize: '22px', marginLeft: '40px' }}/>
          </div>
        </div>
      </div>
      <div className="bottom-triangle"></div>
    </div>
  )
}

export default ChatBubble;