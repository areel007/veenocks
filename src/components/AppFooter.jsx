import { useLocation } from "react-router-dom";
import Logo from "../assets/images/veenocks_logo_reverse.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AppFooter() {
  const date = new Date();
  const year = date.getFullYear();

  const location = useLocation();
  const { pathname } = location;

  const [footer, setFooter] = useState({
    about: "",
    telephone: "",
    email: "",
  });
  const [footerFactory, setFooterFactory] = useState({});
  const [footerShowroom, setFooterShowroom] = useState({});

  useEffect(() => {
    getFooter();
  }, []);

  const getFooter = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/home/footer/66d8b86c17659d6a8ea7b9d3"
    );

    setFooter({
      about: data.footer.about,
      telephone: data.footer.telephone,
      email: data.footer.email,
    });
    setFooterFactory(data.footer.factory);
    setFooterShowroom(data.footer.showRoom);
  };

  return (
    !pathname.includes("cms") && (
      <div>
        <div className="py-[40px] md:py-[100px] bg-[#121212]">
          <div className="w-[90%] xl:w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[30%_auto_auto_auto] justify-between gap-[20px] lg:gap-[50px]">
              <div className="flex-1">
                <div className="py-[5px] mb-[10px]">
                  {/* <p className="text-gray-500 uppercase text-[14px]">About us</p> */}
                  <div className="w-[150px] md:w-[200px]">
                    <img src={Logo} alt="veenocks" className="w-full" />
                  </div>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: footer.about }}
                  className="text-white text-[14px] font-[200]"
                />
              </div>

              <div className="flex-1">
                <div className="py-[5px] mb-[10px]">
                  <p className="text-gray-500 text-[14px] uppercase">Factory</p>
                </div>

                <div className="mb-[20px]">
                  <p
                    dangerouslySetInnerHTML={{ __html: footerFactory }}
                    className="text-white text-[14px] font-[200]"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="py-[5px] mb-[10px]">
                  <p className="text-gray-500 text-[14px] uppercase">
                    Showroom
                  </p>
                </div>

                <div className="mb-[20px]">
                  <p
                    dangerouslySetInnerHTML={{ __html: footerShowroom }}
                    className="text-white text-[14px] font-[200]"
                  />
                </div>
              </div>

              <div className="">
                <p className="text-white text-[14px]">
                  <span>
                    <b className="text-gray-500">T:</b> {footer.telephone}
                  </span>
                  <br />
                  <span>
                    <b className="text-gray-500">E:</b> {footer.email}
                  </span>
                  <br />
                  <span>
                    <b className="text-gray-500">Whatsapp:</b> +234 909 888 9027
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-full p-[20px] text-white">
          <div className="w-[90%] xl:w-[1100px] mx-auto">
            <p className="text-[12px] md:text-[14px] font-[100]">
              &copy; {year} Veenocks. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    )
  );
}
