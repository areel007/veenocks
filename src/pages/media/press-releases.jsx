import { Link } from "react-router-dom";
import Afrixim from "../../assets/images/afrixim.jpeg";
import styles from "../../assets/css.modules/Media.module.css";
import { useState, useEffect } from "react";
import Banner from "../../assets/images/veenocks_media_banner.jpg";
import axios from "axios";

export const PressReleases = () => {
  const [media, setMedia] = useState([]);
  const [showMoreMap, setShowMoreMap] = useState({}); // State to track showMore for each article

  const getMedia = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/media"
    );

    setMedia(
      data.media.filter(
        (item) => item.category === "press releases" || item.category === "all"
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
            Media / Press Releases
          </h3>
        </div>
      </div>
      <div className="py-[10px] bg-zinc-100">
        <div className="max-w-[1100px] w-[90%] mx-auto text-[14px]">
          <Link to="/news" className="hover:underline">
            Media
          </Link>{" "}
          &gt; <span>Press Releases</span>
        </div>
      </div>

      <div className="py-[40px] md:py-[40px] h-auto 2xl:min-h-[50vh]">
        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <div className="grid grid-cols-1 gap-[40px] max-w-[900px] mx-auto">
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

                {/* <span className="italic text-[14px] block mb-[20px]">
                  {item.subtitle}
                </span> */}

                <span
                  className="italic text-[14px] block mb-[20px]"
                  dangerouslySetInnerHTML={{ __html: item.subtitle }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: showMoreMap[item._id]
                      ? item.content
                      : item.content.substring(0, 300),
                  }}
                  className="mb-[10px] list-decimal"
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
