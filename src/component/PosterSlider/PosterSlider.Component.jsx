import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/PosterComponent";
const PosterSlider = (props) => {
  const { poster, title, subtitle, isDark, config } = props;
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {poster?.map((each, index) => (
          <Poster {...each} isDark={isDark} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
