import React from "react";

const Home: React.FC = () => {
  const workColumn = (leftTitle: string, rightTitle: string, unevenColumn: boolean): JSX.Element => {
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

  const storiesColumn = (leftTitle: string, middleTitle: string, rightTitle: string): JSX.Element => {
    return (
      <div className="grid grid-cols-3 gap-16">
        <div className="flex flex-col">
          <img src="https://via.placeholder.com/900" className="bg-blue-400 h-[330px] w-full object-cover" alt=""/>
          <div className="font-['Acumin'] text-[17px] mt-3">{leftTitle}</div>
        </div>
        <div className="flex flex-col">
          <img src="https://via.placeholder.com/900" className="bg-slate-600 h-[330px] w-full object-cover" alt=""/>
          <div className="font-['Acumin'] text-[17px] mt-3">{middleTitle}</div>
        </div>
        <div className="flex flex-col">
          <img src="https://via.placeholder.com/900" className="bg-slate-600 h-[330px] w-full object-cover" alt=""/>
          <div className="font-['Acumin'] text-[17px] mt-3">{rightTitle}</div>
        </div>
      </div>
    );
  }

  const column =(title: string, isWorkColumn: boolean): JSX.Element => {
    return(
      <div>
      <h2 className="font-['GTSuperText-Black'] text-4xl leading-5 mt-[100px] mb-10">{title}</h2>
        {
        isWorkColumn
          ? <div className="grid gap-6 mb-6">
            {workColumn('SWISS GOVERNMENT', 'WAVE CONTACT LENSES', false)}
            {workColumn('ARMASUISSE', 'UNITED GRINDING', true)}
            {workColumn('MEDICAL TECHNOLOGY', 'GRENZEBACH', false)}
          </div>
          : <div className="grid gap-6 mb-6">
            {storiesColumn('NEW TECHNOLOGY CENTRE IN LJUBLJANA', 'CHAOS ENGINEERING', 'INTRODUCING CLOUD-NATIVE APPS')}
            {storiesColumn('AI IS ALL AROUND US', 'CONSULTEER ACQUIRES FUSION', 'CONSULTEER & SCHINDLER CREATIONS HAVE MERGED')}
          </div>
        }

        <div className="flex flex-row mt-12 cursor-pointer">
          <img src="https://www.consulteer.com/assets/images/plus-starhunter.svg" className="w-[30px] h-[20px]" alt=""/>
          <p className="font-['Acumin-Bold'] text-[17px] pl-1.5">{`SHOW MORE ${title.toUpperCase()}`}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='tracking-wide'>
      <h1 className="mt-40 text-[64px] font-['GTSuperText-Black']">
        Human. Technology. <span className='text-[#3cd52e]'>Together.</span>
      </h1>
      <h4 className="mt-2 text-[#313131] text-2xl font-['Acumin']'">
        We deliver full service, end-to-end advisory & engineering services for tomorrow - always with the human at heart. Technology by humans, for humans.
      </h4>
      <h4 className="mt-6 text-[#313131] text-2xl font-['Acumin']'">
        Read more <span className='underline underline-offset-[6px] cursor-pointer'>about Consulteer</span>
      </h4>

      {column('Work', true)}

      {column('Stories', false)}
    </div>
  );
}

export default Home;