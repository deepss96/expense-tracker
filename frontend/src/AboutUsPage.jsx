import React from "react";
import AboutUsMainImg from "./assets/AboutUsMainImg.svg";
import girlMag from "./assets/girlMag.svg";
import girlWriting from "./assets/girlWriting.svg";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-black flex flex-col lg:flex-row text-white font-Poppins lg:h-180">
        <div className="lg:w-1/2 w-full lg:pl-32 p-4 lg:pt-56 pt-16">
          <div className="text-4xl lg:text-5xl font-bold">
            ABOUT US
          </div>
          <div className="text-base lg:text-lg lg:h-10 text-justify mt-5">
            <p>
              skillUp is an ed-tech learning platform to address all your
              weaknesses for becoming industry-ready in this fast-paced world.
              Our learning platform consists of exciting opportunities to learn
              industry skills, develop them, and grow professionally and
              personally. The gamut of learning experiences includes both soft
              skills and hard skills to cover topics that are in and out of your
              syllabus!
            </p>
          </div>
        </div>
        <div className="lg:ml-auto lg:h-144 lg:w-144 mt-8 lg:mt-32 flex justify-center">
          <img src={AboutUsMainImg} alt="aboutus_Img" className="w-3/4 lg:w-full" />
        </div>
      </div>

      <div className="lg:h-360 mb-20">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:ml-44 bg-[#A131DC] text-white mt-20 rounded-2xl lg:h-60 w-11/12 lg:w-3/4 mx-auto">
          <div className="flex items-center">
            <img
              src={AboutUsMainImg}
              className="h-40 lg:h-72 lg:ml-20 lg:mr-10 mb-6 lg:mb-12"
              alt="sectionImage"
            />
            <div className="lg:mr-32 ">
              <h3 className="text-lg lg:text-xl font-poppins font-semibold mb-2">
                Why Us?
              </h3>
              <p className="text-sm lg:text-base font-poppins">
                SkillUp's mission to revolutionize education with innovative
                technology aligns perfectly with my passion for creating
                impactful learning solutions. My experience with projects like
                SkillUp, where I utilized JavaScript to enhance user interfaces,
                has prepared me to contribute effectively to your team. I am
                eager to bring my technical skills and enthusiasm for education
                to SkillUp, helping to deliver engaging and accessible learning
                experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-20 justify-center items-center">

          <div className="flex flex-col justify-center items-center w-full lg:w-50% -space-y-[15px] ml-0 mr-0">
            <img className="w-2/3 lg:w-auto h-44 z-10 md:mr-28 mr-20 ml-0" src={girlMag} alt="magnifying-girl" />
            <div className="bg-[#A4EBA4] rounded-xl p-6 w-11/12 lg:h-96 lg:w-132">
              <h3 className="text-2xl lg:text-4xl font-semibold text-center">
                Our ‎<span className="text-[#A131DC]"> Vision</span>
              </h3>
              <p className="mt-4 text-sm lg:text-base text-justify">
                The vision of skillUp is to inculcate self-motivation in all
                students worldwide through its courses and skill development
                sessions. Moreover, making soft skills a part of the curriculum in
                primary education is also a key driver for our motivation. After
                our sessions, every student should feel confident about themselves
                and know how to express their thought processes and emotions in
                front of everyone in the right tone with logical validation.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full lg:w-50% -space-y-[5px] mr-0 ml-0">
            <img className="w-2/3 lg:w-auto h-44 z-10 md:ml-44 ml-10 mr-0" src={girlWriting} alt="writing-girl" />
            <div className="bg-[#FFEFC3] rounded-xl p-6 w-11/12 lg:h-96 lg:w-132">
              <h3 className="text-2xl lg:text-4xl font-semibold text-center">
                Our ‎<span className="text-[#A131DC]"> Mission</span>
              </h3>
              <p className="mt-4 text-sm lg:text-base text-justify">
                skillUp targets to include necessary soft skill education into
                students' curriculum at an early age to promote the development of
                students into bright individuals and aspirant leaders. skillUp
                aims to bridge the gap between the students and their quest to
                learn soft skills by connecting them to industry experts. It is
                achieved by conducting live events, webinars, and seminars in
                school.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
