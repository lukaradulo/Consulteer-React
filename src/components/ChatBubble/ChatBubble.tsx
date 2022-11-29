import React from "react";
import './ChatBubble.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ChatBubble: React.FC = () => {
  return (
    <div className="chat-bubble">
      <div className="top-corner"></div>
      <div className="bubble">
        <div>
          <h1>All for One.</h1>
          <p>All members of our group support each other, and the members pledge to support our group. An ecosystem where transparency, fairness and consistency are crucial to our success. Our rule is simple. We believe in the culture of us.</p>
        </div>
        <div className="pages-number">
          <div>1/3</div>
          <div>
            <ArrowForwardIcon sx={{ fontSize: '24px', transform: 'rotate(180deg)' }}/>
            <ArrowForwardIcon sx={{ color: '#5cdc3c', fontSize: '24px', marginLeft: '40px' }}/>
          </div>
        </div>
      </div>
      <div className="bottom-triangle"></div>
    </div>
  )
}

export default ChatBubble;