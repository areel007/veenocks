import styles from "../assets/css.modules/AboutUs.module.css";
import Banner from "../assets/images/about-banner.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AboutUs() {
  const dynamicTitle = "Veenocks - About";

  const [fromEarthTitle, setFromEarthTitle] = useState("");
  const [fromEarthContent, setFromEarthContent] = useState("");
  const [ourVision, setOurVision] = useState("");
  const [backgroundTitle, setBackgroundTitle] = useState("");
  const [backgroundContent, setBackgroundContent] = useState("");

  const getAboutUs = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/about-us"
    );

    setFromEarthTitle(data.aboutUs.fromEarth.title);
    setFromEarthContent(data.aboutUs.fromEarth.content);
    setOurVision(data.aboutUs.ourVision);
    setBackgroundTitle(data.aboutUs.background.title);
    setBackgroundContent(data.aboutUs.background.content);
  };

  useEffect(() => {
    document.title = dynamicTitle;
    getAboutUs();
  }, []);
  return (
    <>
      {/* Banner */}
      <div
        className={`w-full h-[300px] md:h-[500px] 2xl:h-[500px] relative bg-fixed ${styles.about__us__banner}`}
      >
        <img
          src={Banner}
          alt="veenocks"
          className="absolute w-full h-full top-0 left-0 object-cover"
        />
        <div className="absolute top-0 left-0 z-[10] bg-black w-full h-full opacity-[.5]"></div>
        <div className="w-[90%] xl:w-[1100px] mx-auto h-full flex justify-center flex-col relative z-[11]">
          <h3 className="text-[30px] md:text-[42px] font-[600] text-white">
            About Us
          </h3>
        </div>
      </div>

      {/*  */}
      <div className="py-[40px] md:py-[100px]">
        <div className="w-[90%] xl:w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-[50px]">
          <h3 className="text-[28px] md:text-[35px] font-[700] leading-[1]">
            {fromEarthTitle}
          </h3>
          <div>
            <p className="text-[18px] md:text-[20px] mb-[20px]">
              We are a manufacturer and supplier of high-quality tiles, catering
              to both residential and commercial market needs.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              <p className="text-[14px] md:text-[16px] leading-[1.6]">
                Our goal is to be Africa&apos;s top producer of porcelain tiles.
                We specialize in crafting and delivering top-quality porcelain
                wall & floor tiles in Nigeria.
                <br />
                <br />
                Using cutting-edge technology and carefully chosen premium
                materials, we create tiles that are not only durable and
                long-lasting but also environmentally friendly. We are
                continuously innovating and exploring sustainable ways to
                deliver the best solutions to meet the needs our customers.
              </p>

              <p className="text-[14px] md:text-[16px] leading-[1.6]">
                Our unwavering commitment to excellence drives us to go above
                and beyond, aiming to be the go-to choice for customers in the
                tile industry. We aim to surpass customer expectations and
                establish ourselves as the trusted choice in the tile industry.{" "}
                <br />
                <br />
                Collaborating with our technical experts, we are well on our way
                to becoming the leading manufacturer of top-notch porcelain
                tiles in SubSaharan Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full py-[40px] our__vision">
        <div className="w-[90%] md:w-[450px] mx-auto">
          <p className="uppercase tracking-[5px] text-black text-center mb-[20px] font-[400] text-[14px]">
            Our vision
          </p>
          <p className="font-[600] text-center text-[16px] md:text-[18px] text-black leading-[1.4]">
            {ourVision}
          </p>
        </div>
      </div>

      {/*  */}
      <div className="py-[40px] md:py-[100px]">
        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-[50px]">
            <div>
              <div className="mb-[30px] 2xl:mb-[60px]">
                <span className="our__background__title">Our Background</span>
              </div>
              <h3 className="text-[28px] md:text-[35px] font-[700] leading-[1]">
                {backgroundTitle}
              </h3>
            </div>

            <p dangerouslySetInnerHTML={{ __html: backgroundContent }} />
          </div>
        </div>
      </div>
    </>
  );
}
