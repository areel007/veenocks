import Logo from "../assets/images/veenocks-logo-white.png"

export default function AppFooter() {
  const date = new Date()
  const year = date.getFullYear()

  return (
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
              <p className="text-white text-[14px] font-[300]">
                Veenocks is a manufacturer and supplier of high-quality tiles,
                catering to both residential and commercial needs. Our goal is
                to be Africa&apos;s top producer of porcelain tiles. We
                specialize in crafting and delivering top-quality porcelain wall
                & floor tiles in Nigeria.
              </p>
            </div>

            <div className="flex-1">
              <div className="py-[5px] mb-[10px]">
                <p className="text-gray-500 text-[14px] uppercase">
                  Factory
                </p>
              </div>

              <div className="mb-[20px]">
                <p className="text-white text-[14px]">
                  Km 3.7 Sagamu-Abeokuta Expressway, <br />
                  Industrial Scheme 110105, <br />
                  Ogun State, Nigeria.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="py-[5px] mb-[10px]">
                <p className="text-gray-500 text-[14px] uppercase">
                  Showroom
                </p>
              </div>

              <div className="mb-[20px]">
                <p className="text-white text-[14px]">
                  33A Akin Adesola St, <br />
                  Victoria Island 106104, <br />
                  Lagos, Nigeria.
                </p>
              </div>
            </div>

            <div className="">
              <p className="text-white text-[14px]">
                <span>
                  <b className="text-gray-500">T:</b> +234 809 037 1913
                </span>
                <br />
                <span>
                  <b className="text-gray-500">E:</b> info@veenocks.ng
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
  );
}
