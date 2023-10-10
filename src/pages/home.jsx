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

export default function Home({ settings, heroImages, cardDetails }) {
  const dynamicTitle = "Veenocks - Home";

  useEffect(() => {
    document.title = dynamicTitle;
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
              From Earth to Elegance
            </h2>
            <p className="text-center text-[14px] md:text-[16px] mb-[20px]">
              Veenocks is a manufacturer and supplier of high-quality tiles,
              catering to both residential and commercial needs. Our goal is to
              be Africa&apos;s top producer of porcelain tiles. We specialize in
              crafting and delivering top-quality porcelain wall & floor tiles
              in Nigeria.
              <br />
              <br />
              Using cutting-edge technology and carefully chosen premium
              materials, we create tiles that are not only durable and
              long-lasting but also environmentally friendly. We are
              continuously innovating and exploring sustainable ways to deliver
              the best solutions to meet the needs of our customers.
              <br />
              <br />
              Our unwavering commitment to excellence drives us to go above and
              beyond, aiming to be the go-to choice for customers in the tile
              industry. We aim to surpass customer expectations and establish
              ourselves as the trusted choice in the tile industry.
              Collaborating with our technical experts, we are well on our way
              to becoming the leading manufacturer of top-notch porcelain tiles
              in Sub-Saharan Africa.
            </p>
            
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
            Excellence is not an exception, it is a prevailing attitude.
          </h2>
        </div>

        <div className="w-full h-[auto] bg-[#464646] p-[40px_20px]">
          <div className="mb-[30px] 2xl:mb-[60px]">
            <span className="core__values__title">Our core values</span>
          </div>

          <span className="capitalize font-[600] text-white text-[16px] md:text-[20px] block mb-[20px]">
            Integrity. Respect. Service. Excellence
          </span>

          <p className="text-[14px] md:text-[16px] text-white font-[300]">
            INTEGRITY is the cornerstone of our operations. We believe in
            unwavering honesty and transparency in every aspect of our business,
            from sourcing raw materials to delivering our products. We hold
            ourselves to the highest ethical standards, ensuring that our
            customers and partners can trust us implicitly.
            <br />
            <br />
            RESPECT is the foundation of our relationships with customers,
            employees, and the environment. We treat everyone with dignity and
            fairness, valuing diversity and inclusivity. Our commitment to
            SERVICE is unparalleled; we are dedicated to exceeding customer
            expectations by providing top-notch products and exceptional
            support. We strive for EXCELLENCE in everything we do, continuously
            innovating and improving our processes and products to set new
            industry standards. facturer of top-notch porcelain tiles in
            Sub-Saharan Africa.
          </p>
        </div>
      </div>

      <div className="w-full h-[auto] 2xl:h-[750px] relative hidden md:block">
        <div className="relative z-[10] w-[90%] xl:w-[1100px] mx-auto h-full">
          <div className="w-full h-full grid grid-cols-2 items-center">
            <div className="pr-[50px] 2xl:pr-[100px] flex justify-end">
              <h2 className="text-white w-[400px] 2xl:w-full text-[40px] 2xl:text-[50px] leading-[1.2] font-[700]">
                Excellence is not an exception, it is a prevailing attitude.
              </h2>
            </div>

            <div className="pl-[50px] 2xl:pl-[100px] py-[100px] 2xl:py-0">
              <div className="mb-[30px] 2xl:mb-[60px]">
                <span className="core__values__title text-[12px] md:text-[14px] tracking-[2px] leading-[1]">
                  Our core values
                </span>
              </div>

              <span className="capitalize font-[600] text-white text-[16px] md:text-[22px] 2xl:text-[26px] block mb-[20px]">
                Integrity. Respect. Service. Excellence
              </span>

              <p className="text-[14px] md:text-[16px] text-white font-[300]">
                INTEGRITY is the cornerstone of our operations. We believe in
                unwavering honesty and transparency in every aspect of our
                business, from sourcing raw materials to delivering our
                products. We hold ourselves to the highest ethical standards,
                ensuring that our customers and partners can trust us
                implicitly.
                <br />
                <br />
                RESPECT is the foundation of our relationships with customers,
                employees, and the environment. We treat everyone with dignity
                and fairness, valuing diversity and inclusivity. Our commitment
                to SERVICE is unparalleled; we are dedicated to exceeding
                customer expectations by providing top-notch products and
                exceptional support. We strive for EXCELLENCE in everything we
                do, continuously innovating and improving our processes and
                products to set new industry standards. facturer of top-notch
                porcelain tiles in Sub-Saharan Africa.
              </p>
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
            Posmoreti... Functional Elegance
          </span>
          <p className="text-center text-[14px] md:text-[16px] mb-[20px]">
            Posmoreti, our flagship tile range are not only beautiful, but
            functional, durable, easy to clean, and resistant to stains and
            fading. They are available in a wide variety of styles and finishes
            to suit every taste. Posmoreti tiles are made to be seen. They are
            the perfect way to add a touch of luxury and style to any space.
          </p>
          <a
            href="https://posmoreti.com/who-we-are"
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
            href="https://posmoreti.com/tiles/"
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
                A Commitment to Sustainability
              </h3>
              <p className="text-white text-[14px] md:text-[16px] leading-[1.6]">
                At Veenocks, we are deeply committed to sustainability. We
                maintain rigorous standards in our use of high-quality materials
                and environmentally responsible manufacturing practices. Our
                dedication goes beyond creating outstanding products; we
                actively explore ways to reduce our environmental impact.
                <br />
                <br />
                Acknowledging the significance of our manufacturing processes,
                we are wholeheartedly committed to minimizing our carbon
                footprint through sustainable materials and production
                techniques. We firmly believe that sustainability is not only
                beneficial for the environment but also for our customers, who
                are increasingly seeking eco-friendly products that resonate
                with their values.
              </p>
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
                <textarea className="p-[10px] border border-black rounded" name="message"></textarea>
              </div>

              <button type="submit" className="p-[10px_40px] bg-black text-white">
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
