import PropTypes from "prop-types";
import LandingCarousel from "../components/LandingCarousel";
// import styles from "./../assets/css.modules/Home.module.css";
// import OurValues from "../assets/images/our-value.jpg";
// import HowToChoose from "../assets/images/how_do_you_choose.jpg";
// import TheImportance from "../assets/images/the-importance.png";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import AppIcon from "../components/AppIcon";
import UnderlinedTitle from "../components/UnderlinedTitle";
import PlainBtn from "../components/PlainBtn";
import Sustainability from "../assets/images/sustainability.jpg";
import { useState } from "react";
import axios from "axios";

export default function Home({ settings, heroImages, cardDetails }) {
  const dynamicTitle = "Veenocks - Home";

  const [aboutUsTitle, setAboutUsTitle] = useState("");
  const [aboutUsContent, setAboutUsContent] = useState("");

  const getAboutUs = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/home/about/66d89f1c4f56098ee255934b"
    );
    setAboutUsTitle(data.homeAbout.title);
    setAboutUsContent(data.homeAbout.content);
  };

  const [coreValues, setCoreValues] = useState({
    description: "",
    title: "",
  });

  const [coreValuesContent, setCoreValuesContent] = useState("");

  const getCoreValues = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/home/core-values/66d89ff14f56098ee255937a"
    );
    setCoreValues({
      description: data.homeCoreValues.description,
      title: data.homeCoreValues.title,
    });
    setCoreValuesContent(data.homeCoreValues.content);
  };

  const [ourProductsTitle, setOurProductsTitle] = useState("");
  const [ourProductsContent, setOurProductsContent] = useState("");

  const getOurProducts = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/home/our-products/66d8b69017659d6a8ea7b98c"
    );
    setOurProductsTitle(data.homeOurProducts.title);
    setOurProductsContent(data.homeOurProducts.content);
  };

  const [commitmentTitle, setCommitmentTitle] = useState("");
  const [commitmentContent, setCommitmentContent] = useState("");

  const getCommitment = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/home/commitment/66d8b75017659d6a8ea7b9b1"
    );
    setCommitmentTitle(data.homeCommitment.title);
    setCommitmentContent(data.homeCommitment.content);
  };

  useEffect(() => {
    document.title = dynamicTitle;
    getAboutUs();
    getCoreValues();
    getOurProducts();
    getCommitment();
  }, []);

  return (
    <>
      <LandingCarousel settings={settings} heroImages={heroImages} />

      {/*About us */}
      <div className="py-[40px] md:py-[60px]">
        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <div className="mb-[40px] md:mb-[40px]">
            <UnderlinedTitle text={"About us"} />
          </div>

          <div className="w-[90%] md:w-[700px] mx-auto">
            <h2 className="font-[700] text-[22px] md:text-[30px] 2xl:text-[36px] leading-[1] text-center mb-[40px]">
              {aboutUsTitle}
            </h2>

            <p
              dangerouslySetInnerHTML={{ __html: aboutUsContent }}
              className="text-center mb-[40px]"
            />

            <a
              href="/about"
              className="block w-[min-content] whitespace-nowrap mx-auto"
            >
              <PlainBtn text={"Read more"} />
            </a>
          </div>
        </div>
      </div>

      {/* Our core values */}
      <div className="block md:hidden w-full">
        <div className="w-full h-[400px] mobile__core__values__bg">
          <h2 className="text-white w-[80%] mx-auto text-center text-[26px] leading-[1.2] font-[700]">
            {coreValues.description}
          </h2>
        </div>

        <div className="w-full h-[auto] bg-[#464646] p-[40px_20px]">
          <div className="mb-[30px] 2xl:mb-[60px]">
            <span className="core__values__title">Our core values</span>
          </div>

          <span className="capitalize font-[600] text-white text-[16px] md:text-[20px] block mb-[20px]">
            {coreValues.title}
          </span>

          <p
            dangerouslySetInnerHTML={{ __html: coreValuesContent }}
            className="text-white"
          />
        </div>
      </div>

      <div className="w-full h-[auto] 2xl:h-[750px] relative hidden md:block">
        <div className="relative z-[10] w-[90%] xl:w-[1100px] mx-auto h-full">
          <div className="w-full h-full grid grid-cols-2 items-center">
            <div className="pr-[50px] 2xl:pr-[100px] flex justify-end">
              <h2 className="text-white w-[400px] 2xl:w-full text-[40px] 2xl:text-[50px] leading-[1.2] font-[700]">
                {coreValues.description}
              </h2>
            </div>

            <div className="pl-[50px] 2xl:pl-[100px] py-[100px] 2xl:py-0">
              <div className="mb-[30px] 2xl:mb-[60px]">
                <span className="core__values__title text-[12px] md:text-[14px] tracking-[2px] leading-[1]">
                  Our core values
                </span>
              </div>

              <span className="capitalize font-[600] text-white text-[16px] md:text-[22px] 2xl:text-[26px] block mb-[20px]">
                {coreValues.title}
              </span>

              <p
                dangerouslySetInnerHTML={{ __html: coreValuesContent }}
                className="text-white"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 absolute left-0 top-0 w-full h-full">
          <div className="w-full h-full core__values__bg"></div>
          <div className="w-full h-full bg-[#464646]"></div>
        </div>
      </div>

      {/* Posmoreti */}
      <div className="py-[40px] md:py-[100px]">
        <div className="w-[90%] md:w-[700px] mx-auto">
          <div className="mb-[40px]">
            <UnderlinedTitle text={"Our products"} />
          </div>
          <span className="text-black font-[700] text-[16px] md:text-[26px] 2xl:text-[30px] text-center block mb-[20px]">
            {ourProductsTitle}
          </span>
          <p
            dangerouslySetInnerHTML={{ __html: ourProductsContent }}
            className="text-center mb-[40px]"
          />
          <a
            href="https://veramis.com/who-we-are"
            className="block w-[min-content] whitespace-nowrap mx-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlainBtn text={"Learn more"} />
          </a>
        </div>
      </div>

      {/* Gallery */}
      <div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardDetails.map((_card, index) => (
            <ProductCard key={index} cardDetails={_card} />
          ))}
        </div>

        <div className="w-full mt-[40px] mb-[40px] md:mb-[100px]">
          <a
            href="https://veramis.com/tiles/"
            className="mx-auto w-[min-content] whitespace-nowrap flex  border border-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-[5px]  border border-black">
              <AppIcon color={"red-300"} />
            </div>
            <PlainBtn text={"View all our products"} />
          </a>
        </div>
      </div>

      {/*Commitment  */}
      <div className="py-[40px] md:py-[100px] bg-[#464646]">
        <div className="w-[90%] xl:w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            {/* <div className="w-full bg-white"></div> */}
            <img
              src={Sustainability}
              alt="veenocks"
              className="w-full h-full"
            />
            <div>
              <h3 className="text-[16px] md:text-[22px] 2xl:text-[26px] text-white font-[600] mb-[20px]">
                {commitmentTitle}
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: commitmentContent }}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fill the form */}
      <div className="py-[40px] md:py-[100px]">
        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-[20px] md:gap-[50px]">
            <div className="flex flex-col gap-[10px]">
              <span className="uppercase text-[14px] mb-[10px]">
                Fill the form
              </span>
              <h3 className="text-[28px] md:text-[35px] font-[600] leading-[1] mb-[10px]">
                Do you have any request?
                <br />
                Let&apos;s have a chat about your tile production needs.
              </h3>
              <p className="text-[14px] md:text-[16px]">
                We&apos;re thrilled that you&apos;ve taken the time to explore
                our website. If you have any questions, require further
                information, or are ready to embark on your next project with
                us, please don&apos;t hesitate to get in touch. Our dedicated
                team is here to assist you every step of the way. Let&apos;s
                bring your tiling vision to life!
              </p>
            </div>

            <form
              className="w-[100%] lg:w-[400px]"
              action="https://formsubmit.co/info@veenocks.ng"
              method="POST"
            >
              <input type="hidden" name="_next" value="https://veenocks.ng" />
              <div className="grid mb-[20px]">
                <span className="block mb-[5px]">Name</span>
                <input
                  type="text"
                  className="p-[10px] border border-black rounded"
                  name="name"
                />
              </div>

              <div className="grid mb-[20px]">
                <span className="block mb-[5px]">E-mail</span>
                <input
                  type="email"
                  className="p-[10px] border border-black rounded"
                  name="email"
                />
              </div>

              <div className="grid mb-[20px]">
                <span className="block mb-[5px]">Phone Number</span>
                <input
                  type="text"
                  className="p-[10px] border border-black rounded"
                  name="phone number"
                />
              </div>

              <div className="grid mb-[20px]">
                <span className="block mb-[5px]">Subject</span>
                <input
                  type="text"
                  className="p-[10px] border border-black rounded"
                  name="subject"
                />
              </div>

              <div className="grid mb-[20px]">
                <span className="block mb-[5px]">Your message</span>
                <textarea
                  className="p-[10px] border border-black rounded"
                  name="message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="p-[10px_40px] bg-black text-white"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  settings: PropTypes.object.isRequired,
  heroImages: PropTypes.array.isRequired,
  cardDetails: PropTypes.array,
};
