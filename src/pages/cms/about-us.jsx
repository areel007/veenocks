import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export const CMSAboutUs = () => {
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

  const [fromEarthTitle, setFromEarthTitle] = useState("");
  const [fromEarthContent, setFromEarthContent] = useState("");
  const onFromEarthTitleChange = (e) => {
    setFromEarthTitle(e.target.value);
  };

  const onFromEarthContentChange = (content) => {
    setFromEarthContent(content);
  };

  const [ourVision, setOurVision] = useState("");
  const onOurVisionChange = (e) => {
    setOurVision(e.target.value);
  };

  const [backgroundTitle, setBackgroundTitle] = useState("");
  const [backgroundContent, setBackgroundContent] = useState("");
  const onBackgroundTitleChange = (e) => {
    setBackgroundTitle(e.target.value);
  };

  const onBackgroundContentChange = (content) => {
    setBackgroundContent(content);
  };

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

  const updateAboutUs = async () => {
    await axios.patch(
      "https://veenocks-cms.onrender.com/api/about-us/66d8ea44152e4eb2cff1168f",
      {
        fromEarth: {
          title: fromEarthTitle,
          content: fromEarthContent,
        },
        ourVision,
        background: {
          title: backgroundTitle,
          content: backgroundContent,
        },
      }
    );

    getAboutUs();
  };

  useEffect(() => {
    getAboutUs();
  }, []);

  return (
    <main className="w-full p-[40px]">
      <span className="text-[14px] block text-[#121212] mb-[40px]">
        Dashboard &gt; About Us
      </span>

      <div className="grid grid-cols-1 gap-[20px]">
        {/* from earth to elegance */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <span>From Earth to Elegance</span>

            <textarea
              name="title"
              className="max-w-[400px] shadow border p-[10px]"
              value={fromEarthTitle}
              onChange={onFromEarthTitleChange}
            ></textarea>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={fromEarthContent}
                onChange={onFromEarthContentChange}
              />
            </div>
          </div>
        </div>

        {/* our vision */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <span>Our vision</span>

            <textarea
              name="title"
              className="max-w-[500px] shadow border p-[10px] h-[150px]"
              value={ourVision}
              onChange={onOurVisionChange}
            ></textarea>
          </div>
        </div>

        {/* background */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <span>Our background</span>

            <textarea
              name="title"
              className="max-w-[400px] shadow border p-[10px]"
              value={backgroundTitle}
              onChange={onBackgroundTitleChange}
            ></textarea>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={backgroundContent}
                onChange={onBackgroundContentChange}
              />
            </div>
          </div>
        </div>

        <button
          className="border p-[10px] bg-[#121212] text-white w-[200px]"
          onClick={updateAboutUs}
        >
          Update About Us
        </button>
      </div>
    </main>
  );
};
