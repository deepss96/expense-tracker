import React from "react";
import Slider from "react-slick";
import join from "../assets/skillsImg/img5.jpg";
import join1 from "../assets/skillsImg/img4.jpg";
import join2 from "../assets/skillsImg/img3.png";
import join3 from "../assets/skillsImg/img2.png";
import join4 from "../assets/skillsImg/img1.svg";



const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
    };

    const slides = [
        {
            id: 1, content:
                <img src={join} className="p-2 md:h-132 h-80 w-full rounded-3x1 skills" alt="" />
        },
        {
            id: 2, content:
                <img src={join1} className="p-2 md:h-132 h-80 w-full rounded-3x1 skills" alt="" />
        },
        {
            id: 3, content:
                <img src={join2} className="p-2 md:h-132 h-80 w-full rounded-3x1 skills" alt="" />
        },
        {
            id: 4, content:
                <img src={join3} className="p-2 md:h-132 h-80 w-full rounded-3x1 skills" alt="" />
        },
        {
            id: 5, content:
                <img src={join4} className="p-2 skills" alt="" />
        },
    ];

    return (
        <Slider {...settings}>
            {slides.map((slide) => (
                <div key={slide.id}>
                    {slide.content}
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
