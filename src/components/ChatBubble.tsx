import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ChatBubble: React.FC = () => {
  return (
    <div className="max-w-[66%]">
      <div className="rotate-[-47deg] relative top-[22px] -left-[14px] w-[27px] h-[42px] border-b-8 border-[#5cdc3c] bg-white"></div>
      <div className="border-8 border-[#5cdc3c] border-solid py-12 pl-[60px] pr-16">
        <div>
          <div className="font-['GTSuperText-Black'] text-[36px] leading-5">All for One.</div>
          <div className="mt-8 max-w-full leading-[1.6em]">All members of our group support each other, and the members pledge to support our group. An ecosystem where transparency, fairness and consistency are crucial to our success. Our rule is simple. We believe in the culture of us.</div>
        </div>
        <div className="flex flex-row justify-between items-end mt-16">
          <div>1/3</div>
          <div>
            <ArrowForwardIcon sx={{ fontSize: '24px', transform: 'rotate(180deg)' }}/>
            <ArrowForwardIcon sx={{ color: '#5cdc3c', fontSize: '24px', marginLeft: '40px' }}/>
          </div>
        </div>
      </div>
      <div className="before:border-solid before:content-[' '] before:border-t-[#5cdc3c] before:border-r-transparent before:border-b-transparent before:border-l-[#5cdc3c] before:h-0 before:absolute before:right-auto before:top-auto before:-bottom-[262px] before:left-[56px] before:w-0 before:border-[20px]"></div>
      <div className="after:border-solid after:content-[' '] after:border-t-white after:border-r-transparent after:border-b-transparent after:border-l-white after:border-[12px] after:absolute after:top-auto after:right-auto after:-bottom-[244px] after:left-[64px] after:h-0 after:w-0"></div>
    </div>
  )
}

export default ChatBubble;