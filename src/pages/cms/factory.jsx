import axios from "axios";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CMSFactory = () => {
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

  const [factoryTitle, setFactoryTitle] = useState("");
  const [factoryContent, setFactoryContent] = useState("");

  const onFactoryTitleChange = (e) => {
    setFactoryTitle(e.target.value);
  };
  const onFactoryContentChange = (content) => {
    setFactoryContent(content);
  };

  const getFactory = async () => {
    const url = "https://veenocks-cms.onrender.com/api/factory";
    const { data } = await axios.get(url);

    setFactoryTitle(data.factory.craftingElegance.title);
    setFactoryContent(data.factory.craftingElegance.content);
  };

  const updateFactory = async () => {
    const url =
      "https://veenocks-cms.onrender.com/api/factory/66d8eb84152e4eb2cff11699";
    await axios.patch(url, {
      craftingElegance: {
        title: factoryTitle,
        content: factoryContent,
      },
    });

    getFactory();
  };

  useEffect(() => {
    getFactory();
  }, []);

  return (
    <main className="w-full p-[40px]">
      <span className="text-[14px] block text-[#121212] mb-[40px]">
        Dashboard &gt; Factory
      </span>

      <div className="grid grid-cols-1 gap-[40px]">
        {/* crafting elegance */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <span>Crafting elegance</span>

            <textarea
              name="title"
              className="max-w-[400px] shadow border p-[10px]"
              value={factoryTitle}
              onChange={onFactoryTitleChange}
            ></textarea>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={factoryContent}
                onChange={onFactoryContentChange}
              />
            </div>

            <button
              className="border p-[10px] bg-[#121212] text-white w-[200px]"
              onClick={updateFactory}
            >
              Update About Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
