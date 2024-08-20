import React from "react";
import AboutUsMainImg from "./assets/AboutUsMainImg.svg";
import girlMag from "./assets/girlMag.svg";
import girlWriting from "./assets/girlWriting.svg";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-black text-white font-Poppins h-auto md:h-180 flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 md:pl-32 md:pt-56">
          <div className="text-4xl md:text-5xl font-bold">
            ABOUT US
          </div>
          <div className="text-base md:text-lg mt-5">
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
        <div className="w-full md:w-1/2 mt-10 md:mt-32 flex justify-center">
          <img src={AboutUsMainImg} alt="aboutus_Img" className="w-3/4 h-auto md:h-144" />
        </div>
      </div>
      
      <div className="h-auto mb-20">
        <div className="flex flex-col md:flex-row justify-center items-center bg-[#A131DC] text-white mt-20 rounded-2xl p-10 md:h-52 w-full md:w-3/4 mx-auto">
          <img
            src={AboutUsMainImg}
            className="h-32 md:h-64 mb-12 md:mb-12"
            alt="sectionImage"
          />
          <div className="md:ml-10">
            <h3 className="text-xl font-poppins font-semibold mb-2">
              Why Us?
            </h3>
            <p className="font-poppins">
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
      <div className="flex mt-20 h-44 justify-center align-items-center">
      <img className="mr-36  z-10" src={girlMag} alt="magnifying-girl" />
      <img className="ml-72 pr-16 mb-3 z-10" src={girlWriting} alt="writing-girl" />
      </div>
      
      <div className="flex -mt-3 mb-20 font-poppins justify-center">
      <div className="pt-5 w-108 mr-6 bg-[#A4EBA4] rounded-xl">
        <h3 className="flex justify-center font-semibold text-4xl">
          Our ‎ <p className="text-[#A131DC]"> Vision</p>
        </h3>
        <p className="p-6 text-justify">
          The vision of skillUp is to inculcate self-motivation in all
          students worldwide through its courses and skill development
          sessions. Moreover, making soft skills a part of the curriculum in
          primary education is also a key driver for our motivation. After
          our sessions, every student should feel confident about themselves
          and know how to express their thought processes and emotions in
          front of everyone in the right tone with logical validation.
        </p>
      </div>
      <div className="pt-5 w-108 ml-6 bg-[#FFEFC3] rounded-xl">
        <h3 className="flex justify-center  font-semibold text-4xl">
          Our ‎ <p className="text-[#A131DC]"> Mission</p>
        </h3>
        <p className="p-6 text-justify">
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
    </>
  );
};

export default AboutUsPage;