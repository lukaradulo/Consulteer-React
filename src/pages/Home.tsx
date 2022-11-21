import React from "react";

const Home: React.FC = () => {
  return (
    <div className='mr-6 tracking-wide'>
      <h1 className="mt-40 text-[64px] font-['GTSuperText-Black']">
        Human. Technology. <span className='text-[#3cd52e]'>Together.</span>
      </h1>
      <h4 className="mt-2 text-[#313131] text-2xl font-['Acumin']'">
        We deliver full service, end-to-end advisory & engineering services for tomorrow - always with the human at heart. Technology by humans, for humans.
      </h4>
      <h4 className="mt-6 text-[#313131] text-2xl font-['Acumin']'">
        Read more <span className='underline underline-offset-[6px] cursor-pointer'>about Consulteer</span>
      </h4>
    </div>
  );
}

export default Home;