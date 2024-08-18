import React from "react";
import Slider from "react-slick";
import join from "../assets/join.svg";
import join1 from "../assets/Join1.jpeg";
import join2 from "../assets/Join2.jpg";
import join3 from "../assets/Join3.png";



const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const slides = [
        {
            id: 1, content:
                <img src={join} className=" p-3 " alt="" />
        },
        {
            id: 2, content:
                <img src={join1} className=" p-3 " alt="" />
        },
        {
            id: 3, content:
                <img src={join2} className=" p-3 " alt="" />
        },
        {
            id: 4, content:
                <img src={join3} className=" p-3 " alt="" />
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
