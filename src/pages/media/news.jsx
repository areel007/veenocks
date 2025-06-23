import { Link } from "react-router-dom";
// import Afrixim from "../../assets/images/afrixim.jpeg";
import styles from "../../assets/css.modules/Media.module.css";
import { useState, useEffect } from "react";
import Banner from "../../assets/images/veenocks_media_banner.jpg";
import axios from "axios";

// news image
import TileNews from "../../assets/images/tile_news.jpg";

export const News = () => {
  const [media, setMedia] = useState([]);
  const [showMoreMap, setShowMoreMap] = useState({}); // State to track showMore for each article

  const getMedia = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/media"
    );

    setMedia(
      data.media.filter(
        (item) => item.category === "news" || item.category === "all"
      )
    );
  };

  useEffect(() => {
    getMedia();
  }, []);

  const toggleShowMore = (id) => {
    setShowMoreMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div
        className={`w-full h-[300px] md:h-[500px] 2xl:h-[500px] relative bg-fixed bg-zinc-300 ${styles.media__banner}`}
      >
        <img
          src={Banner}
          alt="veenocks"
          className="absolute w-full h-full top-0 left-0 object-cover"
        />
        <div className="absolute top-0 left-0 z-[10] bg-black w-full h-full opacity-[.5]"></div>
        <div className="w-[90%] xl:w-[1100px] mx-auto h-full flex justify-center flex-col relative z-[11]">
          <h3 className="text-[30px] md:text-[42px] font-[600] text-white">
            Media / News
          </h3>
        </div>
      </div>

      <div className="py-[10px] bg-zinc-100">
        <div className="max-w-[1100px] w-[90%] mx-auto text-[14px]">
          <Link to="/news" className="hover:underline">
            Media
          </Link>{" "}
          &gt; <span>News</span>
        </div>
      </div>

      <div className="py-[40px] md:py-[40px] h-auto 2xl:min-h-[50vh]">
        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <div className="grid grid-cols-1 gap-[40px] max-w-[900px] mx-auto">
            {/* news from client */}
            <div className="w-full">
              <span
                className="text-zinc-800 text-[24px] md:text-[36px] leading-[1.2] font-[400] group-hover:text-zinc-500 block mb-[20px] hover:underline cursor-pointer"
                onClick={() => toggleShowMore(item._id)}
              >
                World production and consumption of ceramic tiles: forecasts to
                2028
              </span>

              <span className="block text-zinc-600 text-[14px] mb-[10px]">
                20/02/2025, 14:24:10
              </span>
              <span className="block text-zinc-600 text-[14px] mb-[20px] capitalize">
                <b>Categories:</b> News
              </span>
              <img
                src={TileNews}
                alt="veenocks media"
                className="block mb-[20px] w-full object-cover h-[500px]"
              />

              {/* <span className="italic text-[14px] block mb-[20px]">
                The global ceramic tile market is projected to grow by over 2
                billion square meters over the next five years, increasing from
                15.6 billion sqm in 2023 to 17.7 billion sqm by 2028, with an
                average annual growth rate of +2.5%.
              </span> */}

              <p className="mb-[10px]">
                <strong>Summary</strong> - The global ceramic tile market is
                projected to grow by over 2 billion square meters over the next
                five years, increasing from 15.6 billion sqm in 2023 to 17.7
                billion sqm by 2028, with an average annual growth rate of
                +2.5%. <br /> <br />
                Africa is expected to lead this growth, with an impressive
                annual increase of +6%. This growth rate significantly outpaces
                other regions, highlighting Africa's robust demand for ceramic
                tiles compared to slower growth in regions such as South America
                (+4.8%) and non-EU European countries (+3%). In contrast,
                regions like the European Union, Asia, and the Middle East are
                anticipated to see more modest growth rates between +1.6% and
                +1.8%. <br />
                <br />
                <strong>
                  Read more here: <br />
                </strong>
                <a
                  href="https://www.ceramicworldweb.com/en/economics-and-markets/world-production-and-consumption-ceramic-tiles-forecasts-2028?mtm_source=MagNews&mtm_kwd=Newsletter+541+-+17+febbraio+2025+ENG+%2819/02/2025%29&mtm_campaign=CWW+Newsletter"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  https://www.ceramicworldweb.com/en/economics-and-markets/world-production-and-consumption-ceramic-tiles-forecasts-2028?mtm_source=MagNews&mtm_kwd=Newsletter+541+-+17+febbraio+2025+ENG+%2819/02/2025%29&mtm_campaign=CWW+Newsletter
                </a>
              </p>

              <span className="hover:underline cursor-pointer text-zinc-600"></span>
            </div>

            {/* media from cms */}
            {media.map((item) => (
              <div key={item._id} className="w-full">
                <span
                  className="text-zinc-800 text-[24px] md:text-[36px] leading-[1.2] font-[400] group-hover:text-zinc-500 block mb-[20px] hover:underline cursor-pointer"
                  onClick={() => toggleShowMore(item._id)}
                >
                  {item.title}
                </span>

                <span className="block text-zinc-600 text-[14px] mb-[10px]">
                  {new Date(item.createdAt).toLocaleString()}
                </span>
                <span className="block text-zinc-600 text-[14px] mb-[20px] capitalize">
                  <b>Categories:</b>{" "}
                  {item.category === "all"
                    ? "News, Events, Press Releases"
                    : item.category}
                </span>
                <img
                  src={item.image}
                  alt="veenocks media"
                  className="block mb-[20px] w-full object-cover h-[500px]"
                />

                <span className="italic text-[14px] block mb-[20px]">
                  {item.subtitle}
                </span>

                <p
                  dangerouslySetInnerHTML={{
                    __html: showMoreMap[item._id]
                      ? item.content
                      : item.content.substring(0, 300),
                  }}
                  className="mb-[10px]"
                />

                <span
                  className="hover:underline cursor-pointer text-zinc-600"
                  onClick={() => toggleShowMore(item._id)}
                >
                  {showMoreMap[item._id]
                    ? "Show less..."
                    : "Continue reading..."}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
