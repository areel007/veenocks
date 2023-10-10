import Banner from "../assets/images/contacts-image.jpg";
import { useEffect } from "react";

function Contacts() {
  const dynamicTitle = "Veenocks - Contacts";

  useEffect(() => {
    document.title = dynamicTitle;
  }, []);
  return (
    <>
      {/* Banner */}
      <div
        className={`w-full h-[300px] md:h-[500px] 2xl:h-[520px] relative bg-fixed`}
      >
        <img
          src={Banner}
          alt="veenocks"
          className="absolute w-full h-full top-0 left-0 object-cover"
        />
        <div className="absolute top-0 left-0 z-[10] bg-black w-full h-full opacity-[.4]"></div>
      </div>

      <div className="py-[40px] md:py-[60px] lg:py-[100px]">
        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <div className="grid grid-cols-1 gap-[40px] md:gap-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[20px] md:gap-[50px]">
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

            <div className="w-full h-[300px] md:h-[520px] bg-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7078143256363!2d3.4215685767848716!3d6.431567624221139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52c2f772e5d%3A0x3610eb3887047093!2s33a%20Akin%20Adesola%20St%2C%20Victoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1696942397463!5m2!1sen!2sng"
                className="w-full h-full"
                style={{border: '0'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
