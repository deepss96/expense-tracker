import React from 'react';
import Group from '../assets/Group.png';
import Tech from '../assets/Tech.svg';
import CC from '../assets/CC.svg';
import PD from '../assets/PD.svg';

const Resources = () => {
  return (
    <div className='flex'>
      
      <div className='w-1/3'>
        <img src= {Group} className='w-96 h-96 mt-64 ml-auto object-contain'/>
      </div>

      <div className='ml-auto'>
      <div className='text-5xl font-semibold mt-5 mb-10 ml-72'>
       <h3> Resources </h3>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 text-white ml-auto mr-16">
          <div className=" bg-[#F7365B] p-6 rounded-lg w-96 h-64  ">
            <h3 className=" text-xl font-semibold mb-1">Technology</h3>
            <p>Stay updated on the latest tech trends, innovations, and advancements in software, AI, cybersecurity, and emerging technologies.</p>
            <img src= {Tech} className='w-48 h-32 ml-auto' alt="techImg" />
          </div>
          <div className=" bg-[#8238F3] p-6 rounded-lg  w-96 h-64 ">
            <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
            <p>Enhance your skills in blogging, vlogging, social media, and more with tips, tools, and best practices for impactful content creation.</p>
            <img src= {CC} className='w-32 h-30 ml-auto' alt="techImg" />
          </div>
          <div className=" bg-[#3260DA] p-6 rounded-lg  w-96 h-64 ">
            <h3 className="text-xl font-semibold mb-2">Bussiness</h3>
            <p>Explore market analysis, financial strategies, and insights into entrepreneurship, management, and global business trends.</p>
          </div>
          <div className=" bg-[#1CBF98] p-6 rounded-lg  w-96 h-64 ">
            <h3 className="text-xl font-semibold mb-2">Personality Development</h3>
            <p>Explore strategies for personal growth, communication, confidence, and achieving your goals.</p>
            <img src= {PD} className='w-32 h-40 ml-auto pb-8' alt="techImg" />
          </div>
      </div>
      </div>
    </div>
  )
}

export default Resources