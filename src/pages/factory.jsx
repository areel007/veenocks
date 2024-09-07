import styles from "../assets/css.modules/AboutUs.module.css";
import Video from "../assets/videos/tileproduction_vid.mp4";
import PropTypes from "prop-types";
import Banner from "../assets/images/factory-banner2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function Factory({ gridImages }) {
  const dynamicTitle = "Veenocks - Factory";

  const [factoryTitle, setFactoryTitle] = useState("");
  const [factoryContent, setFactoryContent] = useState("");

  const getFactory = async () => {
    const url = "https://veenocks-cms.onrender.com/api/factory";
    const { data } = await axios.get(url);

    setFactoryTitle(data.factory.craftingElegance.title);
    setFactoryContent(data.factory.craftingElegance.content);
  };

  useEffect(() => {
    document.title = dynamicTitle;
    getFactory();
  }, []);

  return (
    <>
      <div
        className={`w-full h-[300px] md:h-[500px] 2xl:h-[500px] relative bg-fixed ${styles.factory__banner}`}
      >
        <img
          src={Banner}
          alt="veenocks"
          className="absolute w-full h-full top-0 left-0 object-cover"
        />
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
                {factoryTitle}
              </h3>
            </div>

            <p dangerouslySetInnerHTML={{ __html: factoryContent }} />
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
                <img
                  src={gridImage}
                  alt="veenocks"
                  className="w-full transition ease-in group-hover:scale-[1.1]"
                />
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
