import PropTypes from "prop-types"; // Import the PropTypes library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function LandingCarousel({ settings, heroImages }) {
  const sliderRef = useRef(null);
  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="carousel__slider">
      <div className="absolute top-[50%] translate-y-[-50%] flex justify-between w-full z-10">
        <div
          onClick={prev}
          className="w-[50px] h-[50px] bg-black flex justify-center items-center cursor-pointer hover:bg-[#1d1d1d]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <div
          className="w-[50px] h-[50px] bg-black flex justify-center items-center cursor-pointer hover:bg-[#1d1d1d]"
          onClick={next}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef} className="custom-slick-carousel">
        {heroImages.map((_heroImage, i) => {
          return (
            <Link
              to={_heroImage.path}
              className="hero-1 group relative group"
              key={i}
            >
              <img
                src={_heroImage.img}
                alt="veenocks"
                className="w-full h-full object-cover group-hover:scale-[1.1] hero__img"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <div className="w-full h-full bg-black opacity-[.50] absolute z-[20] bottom-0 left-0 group-hover:opacity-[1]"></div>
                <div className="text-white relative z-[30] p-[30px]">
                  {_heroImage.name}
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}

// Define the PropTypes for the LandingCarousel component
LandingCarousel.propTypes = {
  settings: PropTypes.object.isRequired,
  heroImages: PropTypes.array.isRequired,
};
