import React, { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import img from "../assets/OBJECTSboys.png";
import img2 from "../assets/Frame1.svg";
import img3 from "../assets/Frame7.png";
import img5 from "../assets/img5.svg";
import holisticDev from "../assets/holisticDev.svg";
import uditImg from "../assets/uditImg.jpg";
import harshitaImg from "../assets/harshitaImg.jpg";
import shipraImg from "../assets/shipraImg.jpg";
import deepakImg from "../assets/deepakImg.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Carousel from "./Carousel";
import ContactForm from "./ContactForm";
import hands from "../assets/hands.svg"

function Banner() {
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="">

      {/* Section 0 */}
      <div className="mx-auto px-4 md:px-20 flex flex-col-reverse md:flex-row banner-bg">
        <div className="order-1 md:order-1 w-full md:w-1/2 mt-10 md:mt-32">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-6xl font-bold google-font">HERE AT skillUp</h1>
            <h2 className="text-xl md:text-4xl google-font tagline">
              Learn, Grow and Develop.
            </h2>
            <div className="mt-4">
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
                <input
                  type="text"
                  className="grow p-2"
                  placeholder="Email"
                />
              </label>
            </div>
            <button className="btn bg-pink-500 mt-5 border-none hover:bg-pink-300 duration-300">
              Get Started
            </button>
          </div>
        </div>
        <div className="order-2 md:order-2 w-full md:w-1/2 flex justify-center items-center md:m-20 banner-img">
          <img src={img} className="rounded-3xl h-56 md:h-full" alt="" />
        </div>
      </div>

      {/* Section 1 */}
      <div className="mt-20 md:mt-80 mb-32 md:mb-64 mx-auto md:px-20 px-4 ">
        <h2 className="text-4xl md:text-7xl text-black font-poppins font-bold md:mt-52 mt-64 text-center">
          Why choose skillUp
        </h2>

        <div className="p-4 sm:p-10 text-white grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient w-full h-auto md:h-108 flex-wrap justify-center rounded-2xl p-4">
            <img src={img2} className="h-32 md:h-44 mt-4 mx-auto" alt="" />
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-poppins font-bold mb-2">
                Hands-On Learning
              </h3>
              <p className="text-justify font-poppins">
                Engage in project-based learning where students can build, create, and innovate, making education interactive and enjoyable.
              </p>
            </div>
          </div>

          <div className="bg-gradient w-full h-auto md:h-108 flex-wrap justify-center rounded-2xl p-4">
            <img src={img3} className="h-32 md:h-44 mt-4 mx-auto" alt="" />
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-poppins font-bold mb-2">
                Real-World Skills
              </h3>
              <p className="text-justify font-poppins">
                Equip students with practical skills that go beyond textbooks, preparing them for real-world challenges and opportunities.
              </p>
            </div>
          </div>

          <div className="bg-gradient w-full h-auto md:h-108 flex-wrap justify-center rounded-2xl p-4">
            <img src={img5} className="h-32 md:h-44 mt-4 mx-auto" alt="" />
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-poppins font-bold mb-2 text-center">
                Vibrant Community
              </h3>
              <p className="text-justify font-poppins text-center">
                Join a thriving community of like-minded peers, educators, and experts, fostering collaboration and a supportive learning environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-20 bg-black flex flex-col-reverse md:flex-row text-white font-poppins h-auto md:h-220">
        <div className="w-full md:w-1/2 mt-10 md:mt-44 md:m-20">
          <Carousel />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-20 p-4 md:p-0 flex flex-col justify-center items-center md:items-start">
          <div className="text-2xl md:text-5xl text-white font-poppins font-bold">
            JOIN OUR DAILY LIVE SESSIONS
          </div>
          <div className="text-base md:text-lg text-justify mt-5 max-w-md">
            <p>
              Unlock your potential with SkillUp’s daily live sessions! Engage with expert instructors and fellow learners in real-time to enhance your soft skills. Our interactive sessions cover a variety of topics, from effective communication to leadership strategies, ensuring you gain practical insights and hands-on experience. Don’t miss out on the opportunity to ask questions, participate in discussions, and accelerate your professional growth. Join us every day and take a step closer to achieving your career goals!
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <div className="mt-20 md:mt-64 flex justify-center items-center font-poppins font-semibold text-black text-2xl md:text-4xl px-4">
          <h3 className="text-center">We are the people who make up SkillUp</h3>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between items-center text-black my-10 md:ml-28 md:mr-28 gap-10 md:gap-0">
          <div className="flex flex-col items-center">
            <img src={uditImg} className="h-48 md:h-96 md:w-64 w-40 rounded-lg" alt="Udit Agrawal" />
            <h4 className="text-lg md:text-2xl text-center font-poppins font-bold mt-2">Udit Agarwal</h4>
            <p className="text-sm md:text-lg text-center font-poppins">Chief Technology Officer</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={harshitaImg} className="h-48 md:h-96 md:w-64 w-40 rounded-lg" alt="Harshita Rai" />
            <h4 className="text-lg md:text-2xl text-center font-poppins font-bold mt-2">Harshita Lalwani</h4>
            <p className="text-sm md:text-lg text-center font-poppins">Co-Founder</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={shipraImg} className="h-48 md:h-96 md:w-64 w-40 rounded-lg" alt="Shipra Thakur" />
            <h4 className="text-lg md:text-2xl text-center font-poppins font-bold mt-2">Shipra Agarwal</h4>
            <p className="text-sm md:text-lg text-center font-poppins">Chief Marketing Officer</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={deepakImg} className="h-48 md:h-96 md:w-64 w-40 rounded-lg" alt="Deepak Rajput" />
            <h4 className="text-lg md:text-2xl text-center font-poppins font-bold mt-2">Deepak Vaishnav</h4>
            <p className="text-sm md:text-lg text-center font-poppins">Chief Product Officer</p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="mt-32 md:mt-64 bg-pink-50 p-10 md:p-24">
        <h3 className="text-4xl md:text-7xl text-black font-poppins font-bold md:mt-24 mt-24 text-center">
          Our holistic development approach
        </h3>
        <div className="flex flex-col md:flex-row justify-between mt-20">
          <img src={holisticDev} className="w-full md:w-1/2 rounded-xl" alt="" />
          <div className="mt-10 md:mt-0 md:w-1/2 p-4 md:p-0 flex flex-col justify-center items-center md:items-start">
            <div className="text-2xl md:text-5xl text-black font-poppins font-bold">
              At SkillUp
            </div>
            <div className="text-base md:text-lg text-justify mt-5 max-w-md">
              <p>
                We believe in fostering all-round development in our students. Our programs emphasize not just academic excellence but also emotional intelligence, creativity, and teamwork. We are committed to nurturing the leaders of tomorrow through a balanced and inclusive education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start  bg-pink-50">
        <div className="md:w-1/2 w-full md:pl-48 md:pt-44 px-4 mb-16 md:mb-0 justify-between items-center text-black">
          <div className="flex flex-row mb-10">
            <h2 className=" md:text-4xl text-2xl font-bold pt-3 ">Get in Touch</h2>
            <img src={hands} alt="sleepingTextBookGirl" className="ml-3 h-14 w-14 "/>
          </div>
          <div className="flex items-center space-x-4 md:w-2/3">
            <FontAwesomeIcon icon={faMapLocationDot} className="text-3xl" />
            <div>
              <h5 className="font-bold">Visit Us</h5>
              <p>123 Education Avenue, Learning City</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:w-1/3 mt-10 md:mt-0">
            <FontAwesomeIcon icon={faPhone} className="text-3xl" />
            <div>
              <h5 className="font-bold">Call Us</h5>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:w-1/3 mt-10 md:mt-0">
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
            <div>
              <h5 className="font-bold">Email Us</h5>
              <p>skillup.sudh@gmail.com</p>
            </div>
          </div>
        </div>
        <div ref={contactRef} className="md:w-1/2 w-full px-4 md:pl-24">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Banner;
