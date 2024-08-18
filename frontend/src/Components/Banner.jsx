import React, { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import img from "../assets/OBJECTSboys.png";
import img2 from "../assets/Frame1.svg";
import img3 from "../assets/Frame7.png";
import img4 from "../assets/Frame4.png";
import img5 from "../assets/img5.svg";
import holisticDev from "../assets/holisticDev.svg";
import scholarImg from "../assets/scholarImg.svg";
import Join from "../assets/join.svg";
import uditImg from "../assets/uditImg.jpg";
import harshitaImg from "../assets/harshitaImg.jpg";
import shipraImg from "../assets/shipraImg.jpg";
import deepakImg from "../assets/deepakImg.jpeg";
import studyingGirl from "../assets/sleepingGirl.svg";
import hands from "../assets/hands.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Carousel from "./Carousel";

function Banner() {

  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* Section 0 */}
      <div className="mx-auto md:px-20 px-4 flex flex-col md:flex-row banner-bg">
        <div className="order-2 md:order-1 md:w-1/2 w-full md:mt-32 mt-20 space-y-2">
          <h1 className="text-4xl md:text-6xl google-font">HERE AT skillUp</h1>
          <h2 className="text-2xl md:text-4xl google-font tagline">
            Learn, Grow and Develop.
          </h2>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow " placeholder="Email" />
          </label>
          <button className="btn bg-pink-500 mt-5 border-none hover:bg-pink-300 duration-300">
            Get Started
          </button>
        </div>
        <div className="order-1 md:w-1/2 w-full md:h-1/2 h-full md:m-20 banner-img">
          <img src={img} className="h-auto w-full md:w-auto rounded-3xl md:pt-0 pt-16" alt="" />
        </div>
      </div>

      {/* Section 1 */}
      <div className="mt-40 md:mt-80 mb-32 md:mb-64 mx-auto md:px-20 px-4">
        <h2 className="text-3xl md:text-7xl text-black font-poppins font-bold md:mt-52 mt-64 text-center">
          Why choose skillUp
        </h2>

        <div className="p-4 sm:p-10 text-white grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient w-full h-auto flex-wrap justify-center rounded-2xl p-4">
            <img src={img2} className="h-44 mb-4" alt="" />
            <h3 className="text-xl md:text-2xl font-poppins font-bold mb-2">
              Hands-On Learning
            </h3>
            <p className="text-justify font-poppins">
              Engage in project-based learning where students can build, create, and innovate, making education interactive and enjoyable.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-gradient flex flex-col md:flex-row justify-center items-center p-4 rounded-2xl">
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-poppins font-bold mb-2">
                  Real-World Skills
                </h3>
                <p className="font-poppins">
                  Equip students with practical skills that go beyond textbooks, preparing them for real-world challenges and opportunities.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src={img3} className="mt-4 md:mt-0" alt="" />
              </div>
            </div>

            <div className="bg-gradient flex flex-col md:flex-row justify-center items-center p-4 rounded-2xl">
              <div className="md:w-1/2">
                <img src={img5} className="mt-4 md:mt-0" alt="" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-poppins font-bold text-right mb-2">
                  Vibrant Community
                </h3>
                <p className="font-poppins text-right">
                  Join a thriving community of like-minded peers, educators, and experts, fostering collaboration and a supportive learning environment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient w-full h-auto flex-wrap justify-center rounded-2xl p-4">
            <img src={img4} className="h-44 mb-4" alt="" />
            <h3 className="text-xl md:text-2xl font-poppins font-bold mb-2">
              Expert Mentorship
            </h3>
            <p className="text-justify font-poppins">
              Connect with industry leaders and professionals who provide guidance, insights, and mentorship, helping students navigate their career paths.
            </p>
          </div>
        </div>

        <div className="pt-8 text-white flex flex-col md:flex-row gap-4">
          <div className="bg-gradient flex justify-center items-center p-4 rounded-2xl">
            <div>
              <h3 className="text-xl md:text-3xl font-poppins font-bold mb-2">
                Customized Curriculum
              </h3>
              <p className="font-poppins">
                Schools can integrate our tailored programs into their curriculum, enhancing the educational experience and meeting modern educational standards.
              </p>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <img src={scholarImg} alt="" />
            </div>
          </div>

          <div className="bg-gradient flex justify-center items-center p-4 rounded-2xl">
            <div className="w-full md:w-auto">
              <img src={holisticDev} alt="" />
            </div>
            <div className="text-right">
              <h3 className="text-xl md:text-3xl font-poppins font-bold mb-2">
                Holistic Development
              </h3>
              <p className="font-poppins">
                Focus on the overall growth of students by nurturing creativity, critical thinking, and problem-solving skills that ensure a bright future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mb-20 bg-black flex flex-col md:flex-row text-white font-Poppins p-4 md:p-20">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Carousel />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mt-8 md:mt-0">
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            JOIN OUR DAILY LIVE SESSIONS
          </h3>
          <p className="text-lg text-justify">
            Unlock your potential with SkillUp’s daily live sessions! Engage with expert instructors, participate in real-time discussions, and get immediate feedback. Whether you're looking to sharpen your skills or explore new areas, our live sessions provide a dynamic and interactive learning experience. Don't miss out on this opportunity to grow, learn, and excel.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div ref={contactRef} className="bg-gray-900 text-white font-poppins">
        <div className="text-center text-4xl py-12">
          Contact Us
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <p className="mt-4">Phone: +91-1234567890</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <p className="mt-4">Email: info@skillup.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faMapLocationDot} size="2x" />
            <p className="mt-4">Location: Aryan College, Ajmer, India</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
