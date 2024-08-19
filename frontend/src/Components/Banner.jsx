import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import img from "../assets/OBJECTSboys.png";
import img2 from "../assets/Frame1.svg";
import img3 from "../assets/Frame7.png";
import img4 from "../assets/Frame4.png";
import img5 from "../assets/img5.svg";
import holisticDev from "../assets/holisticDev.svg";
import scholarImg from "../assets/scholarImg.svg";
import uditImg from "../assets/uditImg.jpg";
import harshitaImg from "../assets/harshitaImg.jpg";
import shipraImg from "../assets/shipraImg.jpg";
import deepakImg from "../assets/deepakImg.jpg";
import hands from "../assets/hands.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Carousel from "./Carousel";
import ContactForm from "./ContactForm";

function Banner() {

  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* Section 0 */}
      <div className="mx-auto px-4 md:px-20 flex flex-col-reverse md:flex-row banner-bg">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-20 md:mt-32">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold google-font">HERE AT skillUp</h1>
            <h2 className="text-2xl md:text-4xl google-font tagline">
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
        <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center md:m-20 banner-img">
          <img src={img} className="rounded-3xl h-auto md:h-full" alt="" />
        </div>
      </div>

      {/* Section 1 */}
      <div className="mt-80 mb-64 mx-auto md:px-20 px-4 ">
        <h2 className="text-7xl text-black font-poppins font-bold md:mt-52 mt-64 text-center">
          Why choose skillUp
        </h2>

        <div className=" p-4 sm:p-10 text-white grid grid-rows-1">
          <div className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-2">
            <div className="mr-auto bg-gradient w-80 h-108 flex-wrap justify-center rounded-2xl">
              <img src={img2} className="h-44 mt-4 ml-5" alt="" />
              <div className="p-4">
                <h3 className="text-2xl font-poppins font-bold mb-2">
                  Hands-On Learning
                </h3>
                <p className="text-justify font-poppins pr-5">
                  Engage in project-based learning where students can build,
                  create, and innovate, making education interactive and
                  enjoyable.
                </p>
              </div>
            </div>

            <div className="gap-6 flex-wrap w-178 items-center justify-center">
              <div className="bg-gradient flex justify-center align-items-center pt-5 pl-6 pr-6 rounded-2xl">
                <div className="">
                  <h3 className="text-2xl font-poppins font-bold mb-2 ">
                    Real-World Skills
                  </h3>
                  <p className="font-poppins">
                    Equip students with practical skills that go beyond
                    textbooks, preparing them for real-world challenges and
                    opportunities.
                  </p>
                </div>
                <div className="-mb-6 w-132 ">
                  <img src={img3} className=" " alt="" />
                </div>
              </div>
              <div className="bg-gradient mt-2 flex justify-center items-center pr-8 pb-10 rounded-2xl">
                <div className="w-180 pb-8 -mt-10">
                  <img src={img5} className="" alt="" />
                </div>
                <div className="">
                  <h3 className="text-2xl font-poppins font-bold text-right mb-2">
                    Vibrant Community
                  </h3>
                  <p className="font-poppins text-right">
                    Join a thriving community of like-minded peers, educators,
                    and experts, fostering collaboration and a supportive
                    learning environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient ml-auto w-80 h-108 flex-wrap justify-center rounded-2xl">
              <img src={img4} className="h-56 mt-4 ml-10" alt="" />
              <div className="p-4 -mt-5">
                <h3 className="text-xl font-poppins font-bold mb-2">
                  Expert Mentorship
                </h3>
                <p className="text-justify font-poppins pr-5">
                  Connect with industry leaders and professionals who provide
                  guidance, insights, and mentorship, helping students navigate
                  their career paths.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-white flex">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-gradient flex justify-center items-center pl-6 rounded-2xl">
                <div>
                  <h3 className="text-3xl font-poppins font-bold mb-2">
                    Customized Curriculum
                  </h3>
                  <p className="font-poppins">
                    Schools can integrate our tailored programs into their
                    curriculum, enhancing the educational experience and meeting
                    modern educational standards.
                  </p>
                </div>

                <div className="w-180 pt-16 -mt-10">
                  <img src={scholarImg} alt="" />
                </div>
              </div>

              <div className="bg-gradient flex justify-center items-center pr-8 rounded-2xl">
                <div className="w-220 pt-16 ">
                  <img src={holisticDev} alt="" />
                </div>
                <div className="">
                  <h3 className="text-3xl font-poppins font-bold text-right mb-2">
                    Holistic Development
                  </h3>
                  <p className="text-right font-poppins">
                    Focus on the overall growth of students by nurturing
                    creativity, critical thinking, and problem-solving
                    21st-century skills that set them apart from the competition
                    ensuring a bright future and a competitive edge in any
                    field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section-2 */}

      <div className="mb-20 bg-black flex flex-col-reverse md:flex-row text-white font-poppins h-auto md:h-220 md:p-0 p-14">
        <div className="w-full md:w-132  mt-10 md:mt-44 md:m-16">
          <Carousel />
        </div>
        <div className="w-full md:w-132 md:pl-20 flex flex-col justify-center items-center md:items-start">
          <div className="text-3xl md:text-5xl text-white font-poppins font-bold">
            JOIN OUR DAILY LIVE SESSIONS
          </div>
          <div className="text-base md:text-lg text-justify mt-5 max-w-md">
            <p>
              Unlock your potential with SkillUp’s daily live sessions! Engage with expert instructors and fellow learners in real-time to enhance your soft skills. Our interactive sessions cover a variety of topics, from effective communication to leadership strategies, ensuring you gain practical insights and hands-on experience. Don’t miss out on the opportunity to ask questions, participate in discussions, and accelerate your professional growth. Join us every day and take a step closer to achieving your career goals!
            </p>
          </div>
        </div>
      </div>

      {/* Section-3 */}
      <div>
        <div className="mt-20 md:mt-64 flex justify-center items-center font-poppins font-semibold text-black text-2xl md:text-4xl px-4">
          <h3 className="text-center font-poppints text-black font-bold md:text-5xl text-2xl md:p-0 p-10 ">We are the people who make up SkillUp</h3>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between items-center text-black my-10 md:ml-32 md:mr-32 gap-10 md:gap-0">
          <div className="flex flex-col items-center">
            <img src={uditImg} className="h-64 w-48 md:h-96 md:w-60 rounded-lg" alt="Udit Agrawal" />
            <h4 className="text-lg md:text-2xl text-center font-poppins font-bold mt-2">Udit Agrawal</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={shipraImg} className="h-64 w-48 md:h-96 md:w-60 rounded-lg" alt="Shipra Agrawal" />
            <h4 className="text-lg md:text-2xl text-center font-poppins font-bold mt-2">Shipra Agrawal</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={harshitaImg} className="h-64 w-48 md:h-96 md:w-60 rounded-lg" alt="Harshita Lalwani" />
            <h4 className="text-lg md:text-2xl text-center font-poppins font-bold mt-2">Harshita Lalwani</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={deepakImg} className="h-64 w-48 md:h-96 md:w-60 rounded-lg" alt="Deepak Vaishnav" />
            <h4 className="text-lg md:text-2xl text-center font-poppins font-bold mt-2">Deepak Vaishnav</h4>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <section id="contact" ref={contactRef}>
        <div className="md:mt-56 h-200 md:flex items-center md:mb-32 mb-156 p-7">
          <div className="md:w-50% w-100% md:pl-40 p-10 ">
            <div className="flex">
              <h3 className="font-poppints text-black font-semibold text-6xl w-64">Let's get in touch</h3>
              <img src={hands} className="w-20 mt-12 -ml-4" alt="hands" />
            </div>
            <div className="mt-20">
              <h6 className="font-poppints text-black font-semibold text-2xl w-56">Don’t  be afraid to
                say hello to us!</h6>
              <div className="mt-14 font-poppins">
                <div className="flex flex-wrap w-44 items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <h6 className="font-semibold text-lg">Email</h6>
                  <span className="ml-6">	helpdesk.skillup@gmail.com</span>
                </div>
                <div className="flex mt-2 flex-wrap w-44 items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  <h6 className=" font-semibold text-lg">Phone</h6>
                  <span className="ml-6">+91 9116666912</span>
                </div>
                <div className="flex mt-2 flex-wrap w-96 items-center">
                  <FontAwesomeIcon icon={faMapLocationDot} className="mr-2" />
                  <h6 className="font-semibold text-lg">Office</h6>
                  <span className="ml-6">W-9, Industrial Area, Near 200 Quarters, Yamunanagar, Haryana-135001</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-50% w-100% md:pl-64 p-10 md:mb-0 ">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}

export default Banner;