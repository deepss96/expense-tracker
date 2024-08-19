import React from 'react';
import Insta from '../assets/Insta.svg';
import X from '../assets/X.svg';
import Linkedin from '../assets/Linkedin.svg';
import FB from '../assets/FB.svg';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo-no-background.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col font-semibold mt-4 md:mt-1 md:ml-12 text-center md:text-left">
          <Link to="/#top" className="mb-4">HOME</Link>
          <a href="#skills" className="mb-4">SKILLS</a>
          <a href="tg://resolve?domain=SkillUp360" target="_blank" rel="noopener noreferrer">JOIN</a>
        </div>
        <div className="mt-8 md:mt-0 md:ml-40">
          <h3 className="mb-4 text-xl font-poppins text-center md:text-left">Community</h3>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="https://instagram.com" className="flex items-center">
              <img src={Insta} alt="Instagram" className="w-6 h-6 mr-2" />
              Instagram
            </a>
            <a href="https://twitter.com" className="flex items-center">
              <img src={X} alt="Twitter" className="w-6 h-6 mr-2" />
              X (Twitter)
            </a>
            <a href="https://linkedin.com" className="flex items-center">
              <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a href="https://facebook.com" className="flex items-center">
              <img src={FB} alt="Facebook" className="w-6 h-6 mr-2" />
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
        <img src={logo} alt="Logo" className="h-20 w-40 md:h-56 md:w-72 md:mr-40" />
      </div>
    </footer>
  );
};

export default Footer;
