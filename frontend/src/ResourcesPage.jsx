import React from 'react';
import Group from './assets/Group.png';
import Tech from './assets/Tech.svg';
import CC from './assets/CC.svg';
import PD from './assets/PD.svg';
import TextBoxWImg from './Components/TextBoxWImg';
import Bussiness from './assets/Bussiness.svg';

const ResourcesPage = () => {
  return (
    <div className='flex flex-col md:flex-row mb-20 md:mb-20'>
      
      <div className='w-full md:w-1/3 flex justify-center md:block'>
        <img src={Group} className='w-96 h-96 mt-10 md:mt-64 md:ml-auto object-contain'/>
      </div>

      <div className='w-full md:w-auto md:ml-auto  md:mr-20'>
        <div className='text-3xl md:text-5xl font-semibold mt-5 mb-10 text-center md:mr-72 md:ml-72'>
          <h3> Resources </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 text-white px-4 md:px-0">
          <TextBoxWImg 
            title="Technology" 
            content="Stay updated on the latest tech trends, innovations, and advancements in software, AI, cybersecurity, and emerging technologies." 
            image={Tech} 
            bgcolor="bg-[#F7365B]"
          />
          <TextBoxWImg 
            title="Content Creation" 
            content="Enhance your skills in blogging, vlogging, social media, and more with tips, tools, and best practices for impactful content creation." 
            image={CC} 
            bgcolor="bg-[#8238F3]"
          />
          <TextBoxWImg 
            title="Bussiness" 
            content="Explore market analysis, financial strategies, and insights into entrepreneurship, management, and global business trends." 
            image={Bussiness} 
            bgcolor="bg-[#3260DA]"
          />
          <TextBoxWImg 
            title="Personality Development" 
            content="Explore strategies for personal growth, communication, confidence, and achieving your goals." 
            image={PD} 
            bgcolor="bg-[#1CBF98]"
          />
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage;
