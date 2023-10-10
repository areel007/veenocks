// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Video from "../assets/videos/veenocks-video.mp4";
// import VideoTwo from "../assets/videos/veenocks-video-1.mp4";
import styles from "../assets/css.modules/AboutUs.module.css";
import Video from "../assets/videos/tileproduction_vid.mp4";
import PropTypes from "prop-types";
import Banner from "../assets/images/factory-banner2.jpg"
import { useEffect } from "react";

function Factory({ gridImages }) {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   draggable: true,
  //   focusOnSelect: true,
  //   pauseOnHover: true,
  //   arrows: false,
  //   autoplaySpeed: 10000,
  // };

  // const videos = [Video, VideoTwo];

  const dynamicTitle = "Veenocks - Factory";

  useEffect(() => {
    document.title = dynamicTitle;
  }, []);

  return (
    <>
      {/* Hero */}
      {/* <Slider {...settings}>
        {videos.map((video, index) => {
          return (
            <div key={index} className="w-full h-[300px] md:h-[70vh]">
              <video
                src={video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              ></video>
            </div>
          );
        })}
      </Slider> */}

      <div
        className={`w-full h-[300px] md:h-[500px] 2xl:h-[520px] relative bg-fixed ${styles.factory__banner}`}
      >
        <img src={Banner} alt="veenocks" className="absolute w-full h-full top-0 left-0 object-cover" />
        <div className="absolute top-0 left-0 z-[10] bg-black w-full h-full opacity-[.5]"></div>
        <div className="w-[90%] xl:w-[1100px] mx-auto h-full flex justify-center flex-col relative z-[11]">
          <h3 className="text-[30px] md:text-[42px] font-[600] text-white">
            Our Factory
          </h3>
        </div>
      </div>

      <div className="py-[40px] md:py-[100px]">
        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-[50px]">
            <div>
              <h3 className="text-[28px] md:text-[35px] font-[700] leading-[1]">
                Crafting Elegance, One Tile at a Time.
              </h3>
            </div>

            <p className="text-[14px] md:text-[16px] leading-[1.6]">
              Welcome to our state-of-the-art tiles manufacturing facility in
              Ogun State, Nigeria.
              <br />
              <br />
              At the heart of our commitment to excellence, our factory stands
              as a testament to precision and innovation in the production of
              porcelain interior and exterior tiles.
              <br />
              <br />
              With a relentless pursuit of quality, we cater to both residential
              and commercial markets, delivering premium tiling solutions that
              elevate spaces and inspire creativity. Our factory embodies
              cutting-edge technology, skilled craftsmanship, and a dedication
              to sustainable practices.
              <br />
              <br />
              Step inside and discover the craftsmanship that transforms raw
              materials into exquisite tiles. From design to production, we
              ensure every tile reflects the artistry and durability that
              defines our brand.
            </p>
          </div>
        </div>
      </div>

      <div className="py-[40px] md:py-[100px] bg-[#f5f5f5]">
        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <video
            src={Video}
            controls
            muted
            autoPlay
            loop
            className="w-full mb-[20px]"
          ></video>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {gridImages.map((gridImage, index) => (
              <div className="w-full overflow-hidden group" key={index}>
                <img src={gridImage} alt="veenocks" className="w-full transition ease-in group-hover:scale-[1.1]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Factory.propTypes = {
  gridImages: PropTypes.array,
};

export default Factory;
