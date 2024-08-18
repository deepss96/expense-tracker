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
import deepakImg from "../assets/deepakImg.jpeg";
import studyingGirl from "../assets/sleepingGirl.svg";
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
      <div className="mx-auto md:px-20 px-4 flex flex-col md:flex-row banner-bg">
        <div className="order-2 md:order-1 md:w-1/2 w-full md:mt-32 mt-20  ">
          <div className="space-y-2 ">
            <h1 className="text-6xl google-font">HERE AT skillUp</h1>
            <h2 className="text-4xl google-font tagline">
              Learn, Grow and Develop.
            </h2>
            <br />
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
          </div>
          <button className="btn bg-pink-500 mt-5 border-none hover:bg-pink-300 duration-300 ">
            Get Started
          </button>
        </div>
        <div className="order-1 md:w-1/2 w-4/5 md:h-1/2 h-full md:m-20 banner-img">
          <img src={img} className="h-92 rounded-3xl md:pt-0 pt-16 " alt="" />
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
      {/* Section-3 */}

      <div className="mb-20 bg-black flex text-white font-Poppins h-220">
        <div className=" w-144 mt-44 m-20">
          <Carousel />
        </div>
        <div className="w-50% mt-20">
          <div className="text-5xl w-180 text-white font-Poppins font-bold pt-56">
            JOIN OUR DAILY LIVE SESSIONS
          </div>
          <div className="text-lg h-10 w-132 text-justify pt-5">
            <p>
              Unlock your potential with SkillUp’s daily live sessions! Engage with expert instructors and fellow learners in real-time to enhance your soft skills. Our interactive sessions cover a variety of topics, from effective communication to leadership strategies, ensuring you gain practical insights and hands-on experience. Don’t miss out on the opportunity to ask questions, participate in discussions, and accelerate your professional growth. Join us every day and take a step closer to achieving your career goals!
            </p>
          </div>
        </div>
      </div>

      {/* Section-4 */}
      <div>
        <div className="mt-64 flex justify-center items-center font-poppins font-semibold text-black text-4xl">
          <h3 className="w-96 text-center"> We are the people who make up skillUp </h3>
        </div>
        <div className="flex justify-between items-center text-black ml-56 m-20 mr-56">
          <div>
            <img src={uditImg} className="h-96"></img>
            <h4 className="text-2xl text-center font-poppins font-bold">Udit Agrawal</h4>
          </div>
          <div>
            <img src={shipraImg} className="h-96"></img>
            <h4 className="text-2xl text-center font-poppins font-bold">Shipra Agrawal</h4>
          </div>
          <div>
            <img src={harshitaImg} className="h-96"></img>
            <h4 className="text-2xl text-center font-poppins font-bold">Harshita Lalwani</h4>
          </div>
          <div>
            <img src={deepakImg} className="h-96"></img>
            <h4 className="text-2xl text-center font-poppins font-bold">Deepak Vaishnav</h4>
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <section id="contact" ref={contactRef}>
        <div className="mt-56 h-200 flex items-center mb-32">
          <div className="ml-20 w-50% pl-64">
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
                  <span className="ml-6">contact@skillup.com</span>
                </div>
                <div className="flex mt-2 flex-wrap w-44 items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  <h6 className=" font-semibold text-lg">Phone</h6>
                  <span className="ml-6">+91 9835467289</span>
                </div>
                <div className="flex mt-2 flex-wrap w-96 items-center">
                  <FontAwesomeIcon icon={faMapLocationDot} className="mr-2" />
                  <h6 className="font-semibold text-lg">Office</h6>
                  <span className="ml-6">W-9, Industrial Area, Near 200 Quarters, Yamunanagar, Haryana-135001</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-50% ml-64">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}

export default Banner;
