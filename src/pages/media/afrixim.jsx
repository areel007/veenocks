import AfriximImg from "../../assets/images/afrixim.jpeg";
import styles from "../../assets/css.modules/Media.module.css";
import { Link, useLocation } from "react-router-dom";

export const Afrixim = () => {
  const location = useLocation();
  const { category } = location.state || {};
  return (
    <>
      <div
        className={`w-full h-[300px] md:h-[500px] 2xl:h-[520px] relative bg-fixed bg-zinc-300 ${styles.media__banner}`}
      >
        {/* <img
          src={Banner}
          alt="veenocks"
          className="absolute w-full h-full top-0 left-0 object-cover"
        /> */}
        <div className="absolute top-0 left-0 z-[10] bg-black w-full h-full opacity-[.5]"></div>
        <div className="w-[90%] xl:w-[1100px] mx-auto h-full flex justify-center flex-col relative z-[11]">
          <h3 className="text-[30px] md:text-[42px] font-[600] text-white">
            Media
          </h3>
        </div>
      </div>
      <div className="py-[10px] bg-zinc-100">
        <div className="max-w-[1100px] w-[90%] mx-auto text-[14px]">
          <Link to="/news" className="hover:underline">
            Media
          </Link>{" "}
          &gt; <span className="capitalize underline">{category}</span>
        </div>
      </div>

      <div className="py-[40px] md:py-[100px]">
        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <div className="max-w-[900px] w-[100%]">
            <div className="mb-[20px] flex flex-col gap-[10px]">
              <p className="text-[24px] md:text-[40px] font-[300] text-zinc-800 leading-[1.1]">
                Afreximbank signs project preparation facility agreement to
                support development of Veenocks porcelain tiles plant in Nigeria
              </p>
              <span className="text-zinc-500 text-[14px]">08/13/2024</span>
              <span className="text-[14px]">
                <b>Categories:</b> News, Events, Press Releases
              </span>
            </div>
            <img
              src={AfriximImg}
              alt="veenocks media"
              className="w-full block mb-[20px]"
            />
            <span className="italic text-[14px] font-[400] leading-[1.4] block mb-[20px] text-zinc-700">
              Mr. Adebisi Abidemi Adebutu, Group President of R28 Holdings and
              Mrs. Kanayo Awani, Executive Vice President Intra Africa Trade and
              Export Development, Afreximbank
            </span>

            <p className="text-[14px] md:text-[16px] leading-[1.4] font-[400]">
              <b>Cairo, Egypt… 15 August 2024: –</b> African Export-Import Bank
              (Afreximbank) has signed a project preparation facility agreement
              with Veenocks Limited for the financing of the development of
              Veenocks’ porcelain tile manufacturing plant located in Sagamu,
              Ogun State, Nigeria. <br />
              <br />
              The plant, to be operated as an indigenously owned
              state-of-the-art facility with an annual production capacity of
              6.6 million square metres of floor and wall tiles, is expected to
              bring on stream assets with an estimated investment cost of US$117
              million. <br />
              <br />
              Mrs. Kanayo Awani, Executive Vice President, Intra-African Trade
              and Export Development Bank, signed the facility agreement on
              behalf of Afreximbank while Mr. Adebisi Abidemi Adebutu, Ultimate
              Beneficial Owner of Veenocks Limited, signed for the company.{" "}
              <br />
              <br />
              Under the terms of the facility agreement, the project preparation
              facility will be deployed during the pre-investment stage towards
              de-risking the project and rapidly advancing it to bankability,
              with the early-stage intervention sending a strong signal to the
              market about Afreximbank’s commitment to the project. In addition,
              Afreximbank will be appointed the Mandated Lead Arranger and will
              take the lead in syndicating the debt raise, with the ability to
              incorporate credit enhancements, if needed. <br />
              <br />
              The project is expected to exploit and beneficiate Nigeria’s
              underutilised natural resources using clay to produce porcelain
              tiles for the domestic and international markets and will deploy
              proven technology to enable the country to exploit its natural
              resources at scale. In addition to creating over 700 job roles
              over its operational period, the project is expected to result in
              exports estimated at US$11.4 billion. <br />
              <br />
              Commenting on the agreement, <b>Mrs. Awani</b> explained that the
              facility agreement reflected Afreximbank’s commitment to advancing
              impactful projects in Nigeria and beyond as well as its dedication
              to leveraging its diverse product suite to offer end-to-end
              solutions throughout the project finance value chain. <br />
              <br />
              She added that the holistic approach reflected the Bank’s
              comparative advantages in supporting its member countries to
              implement projects efficiently and effectively and of its support
              for indigenous African investors establishing state-of-the-art
              manufacturing facilities. <br />
              <br />
              Demand for tiles in Nigeria was estimated at 210 million square
              metres in 2023, with local production at 137 million square
              metres. The demand is projected to rise to 270 million square
              metres by 2027. <br />
              <br />
              <b>Mr. Adebisi Abidemi Adebutu</b>, Group President of R28
              Holdings, the parent company of Veenocks, stated, “We are thrilled
              to welcome Afreximbank as a key partner in Veenocks’ journey
              towards sustainable growth. Once fully implemented, our
              state-of-the-art factories will set a new benchmark for
              world-class facilities in Africa, showcasing our commitment to
              excellence and innovation. This strategic partnership with
              Afreximbank marks a significant milestone in Veenocks’ expansion
              plans, enabling the company to leverage the Bank’s expertise and
              resources to drive growth and development in the region. With this
              collaboration, Veenocks is poised to make a meaningful impact in
              the industry, fostering economic growth and creating opportunities
              for communities across Africa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
