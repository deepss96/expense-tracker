import React from 'react';
import Insta from '../assets/Insta.svg';
import X from '../assets/X.svg';
import Linkedin from '../assets/Linkedin.svg';
import FB from '../assets/FB.svg'

const Footer = () => {
  return (
    <div className="bg-black text-white h-80 py-8 px-6 flex justify-between ">
      <div className="flex flex-col font-semibold  mt-1 ml-12 ">
        <a href="#home" className=" mb-4">HOME</a>
        <a href="#skills" className="  mb-4">SKILLS</a>
        <a href="#login" className=' ' >LOGIN</a>
      </div>
      <div className='mr-96'>
        <h3 className="mb-4 text-xl font-poppins ">Community</h3>
        <div className="flex flex-col space-y-4">
          <a href="https://instagram.com" className="flex items-center">
            <img src={Insta} alt="Instagram" className="w-6 h-6 mr-2" />
            Instagram
          </a>
          <a href="https://twitter.com" className="flex items-center">
            <img src= {X} alt="Twitter" className="w-6 h-6 mr-2" />
            X (Twitter)
          </a>
          <a href="https://linkedin.com" className="flex items-center">
            <img src= {Linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
            LinkedIn
          </a>
          <a href="https://facebook.com" className="flex items-center">
            <img src={FB} alt="Facebook" className="w-6 h-6 mr-2" />
            Facebook
          </a>
        </div>
      </div>
      <div className="text-8xl font-bold mr-56">skillUp</div>
    </div>
  );
};

export default Footer;
