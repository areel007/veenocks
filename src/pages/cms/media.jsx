import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export const CMSMedia = () => {
  // react quill
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  const [media, setMedia] = useState([]);
  const [mediaTitle, setMediaTitle] = useState("");
  const [mediaContent, setMediaContent] = useState("");
  const [mediaSubtitle, setMediaSubtitle] = useState("");
  const [mediaCategory, setMediaCategory] = useState("");
  const [mediaImage, setMediaImage] = useState("");

  const onMediaTitleChange = (e) => {
    setMediaTitle(e.target.value);
  };

  const onMediaContentChange = (content) => {
    setMediaContent(content);
  };

  const onMediaSubtitleChange = (e) => {
    setMediaSubtitle(e.target.value);
  };

  const onMediaCategoryChange = (e) => {
    setMediaCategory(e.target.value);
  };

  const onMediaImageChange = (e) => {
    const { files } = e.target;

    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        setMediaImage(reader.result);
      };
    }
  };

  const getMedia = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/media"
    );

    setMedia(data.media);
  };

  const onMediaSubmit = async () => {
    await axios.post("https://veenocks-cms.onrender.com/api/media", {
      title: mediaTitle,
      content: mediaContent,
      subtitle: mediaSubtitle,
      category: mediaCategory,
      image: mediaImage,
    });

    setMediaTitle("");
    setMediaContent("");
    setMediaSubtitle("");
    setMediaCategory("");
    setMediaImage("");

    getMedia();
  };

  const deleteMedia = async (id) => {
    await axios.delete(`https://veenocks-cms.onrender.com/api/media/${id}`);
    getMedia();
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <main className="w-full p-[40px]">
      <span className="text-[14px] block text-[#121212] mb-[40px]">
        Dashboard &gt; Media
      </span>

      <div className="grid grid-cols-[1fr_500px] relative gap-[40px]">
        <div className="w-[100%] p-[20px]">
          <p className="text-[14px] text-[#121212]">Add new media</p>

          <div className="grid grid-cols-1 gap-[10px] mt-[20px]">
            <textarea
              name="title"
              className="p-[10px] border shadow"
              placeholder="Media Title"
              onChange={onMediaTitleChange}
            ></textarea>

            <textarea
              name="subtitle"
              className="p-[10px] border shadow"
              placeholder="Media Subtitle"
              onChange={onMediaSubtitleChange}
            ></textarea>

            <input
              type="file"
              className="p-[10px] border shadow"
              onChange={onMediaImageChange}
            />

            <select
              name=""
              className="p-[10px] border shadow"
              onChange={onMediaCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="all">All</option>
              <option value="news">News</option>
              <option value="events">Events</option>
              <option value="press releases">Press Releases</option>
            </select>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={mediaContent}
                onChange={onMediaContentChange}
              />
            </div>

            <button
              className="p-[10px] bg-[#121212] text-white"
              onClick={onMediaSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div></div>
        <div className="fixed w-[500px] right-[40px]">
          {media.length > 0 ? (
            <div className="flex flex-col gap-[10px]">
              {media.map((_media, i) => (
                <div
                  key={i}
                  className="flex justify-between p-[10px] odd:shadow odd:bg-zinc-50 hover:shadow-lg even:bg-zinc-100"
                >
                  <p className="text-[#121212] flex-1 text-[16px] font-[300]">
                    {_media.title}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[20px] h-[20px] cursor-pointer hover:text-red-500"
                    onClick={() => deleteMedia(_media._id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[14px] text-[#121212]">No media found</p>
          )}
        </div>
      </div>
    </main>
  );
};

{
  /* <div className="w-full" state={{ category: "press releases" }}>
                <span
                  className="text-zinc-800 text-[24px] md:text-[36px] leading-[1.2] font-[400] group-hover:text-zinc-500 block mb-[20px] hover:underline cursor-pointer"
                  onClick={() => setShowMore(true)}
                >
                  Afreximbank signs project preparation facility agreement to
                  support development of Veenocks porcelain tiles plant in Nigeria
                </span>
                <span className="block text-zinc-600 text-[14px] mb-[10px]">
                  08/13/2024
                </span>
                <span className="block text-zinc-600 text-[14px] mb-[20px]">
                  <b>Categories:</b> News, Events, Press Releases
                </span>
                <img
                  src={Afrixim}
                  alt="veenocks media"
                  className="block mb-[20px] w-full object-cover h-[500px]"
                />
  
                <span className="italic text-[14px] block mb-[20px]">
                  Mr. Adebisi Abidemi Adebutu, Group President of R28 Holdings and
                  Mrs. Kanayo Awani, Executive Vice President Intra Africa Trade
                  and Export Development, Afreximbank
                </span>
  
                <p>
                  <b>Cairo, Egypt… 15 August 2024:</b> – African Export-Import
                  Bank (Afreximbank) has signed a project preparation facility
                  agreement with Veenocks Limited for the financing of the
                  development of Veenocks’ porcelain tile manufacturing plant
                  located in Sagamu, Ogun State, Nigeria. <br />
                  <br />
                  The plant, to be operated as an indigenously owned
                  state-of-the-art facility with an annual production capacity of
                  6.6 million square metres of floor and wall tiles, is expected
                  to bring on stream assets with an estimated investment cost of
                  US$117 million. <br /> <br />
                  {showMore && (
                    <p>
                      Mrs. Kanayo Awani, Executive Vice President, Intra-African
                      Trade and Export Development Bank, signed the facility
                      agreement on behalf of Afreximbank while Mr. Adebisi Abidemi
                      Adebutu, Ultimate Beneficial Owner of Veenocks Limited,
                      signed for the company. <br />
                      <br />
                      Under the terms of the facility agreement, the project
                      preparation facility will be deployed during the
                      pre-investment stage towards de-risking the project and
                      rapidly advancing it to bankability, with the early-stage
                      intervention sending a strong signal to the market about
                      Afreximbank’s commitment to the project. In addition,
                      Afreximbank will be appointed the Mandated Lead Arranger and
                      will take the lead in syndicating the debt raise, with the
                      ability to incorporate credit enhancements, if needed.{" "}
                      <br />
                      <br />
                      The project is expected to exploit and beneficiate Nigeria’s
                      underutilised natural resources using clay to produce
                      porcelain tiles for the domestic and international markets
                      and will deploy proven technology to enable the country to
                      exploit its natural resources at scale. In addition to
                      creating over 700 job roles over its operational period, the
                      project is expected to result in exports estimated at
                      US$11.4 billion. <br />
                      <br />
                      Commenting on the agreement, Mrs. Awani explained that the
                      facility agreement reflected Afreximbank’s commitment to
                      advancing impactful projects in Nigeria and beyond as well
                      as its dedication to leveraging its diverse product suite to
                      offer end-to-end solutions throughout the project finance
                      value chain. <br />
                      <br />
                      She added that the holistic approach reflected the Bank’s
                      comparative advantages in supporting its member countries to
                      implement projects efficiently and effectively and of its
                      support for indigenous African investors establishing
                      state-of-the-art manufacturing facilities. <br />
                      <br />
                      Demand for tiles in Nigeria was estimated at 210 million
                      square metres in 2023, with local production at 137 million
                      square metres. The demand is projected to rise to 270
                      million square metres by 2027. <br />
                      <br />
                      Mr. Adebisi Abidemi Adebutu, Group President of R28
                      Holdings, the parent company of Veenocks, stated, “We are
                      thrilled to welcome Afreximbank as a key partner in
                      Veenocks’ journey towards sustainable growth. Once fully
                      implemented, our state-of-the-art factories will set a new
                      benchmark for world-class facilities in Africa, showcasing
                      our commitment to excellence and innovation. This strategic
                      partnership with Afreximbank marks a significant milestone
                      in Veenocks’ expansion plans, enabling the company to
                      leverage the Bank’s expertise and resources to drive growth
                      and development in the region. With this collaboration,
                      Veenocks is poised to make a meaningful impact in the
                      industry, fostering economic growth and creating
                      opportunities for communities across Africa. <br />
                      <br />
                    </p>
                  )}
                </p>
  
                <span
                  className="hover:underline cursor-pointer text-zinc-600"
                  onClick={() => setShowMore((prev) => !prev)}
                >
                  {showMore ? "Show less..." : "Continue reading..."}
                </span>
              </div> */
}
