import axios from "axios";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CMSHome = () => {
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

  const [aboutUsTitle, setAboutUsTitle] = useState("");
  const [aboutUsContent, setAboutUsContent] = useState("");
  const onAboutUsTitleChange = (e) => {
    setAboutUsTitle(e.target.value);
  };

  const onAboutUsContentChange = (content) => {
    setAboutUsContent(content);
  };

  const getAboutUs = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/home/about/66d89f1c4f56098ee255934b"
    );
    setAboutUsTitle(data.homeAbout.title);
    setAboutUsContent(data.homeAbout.content);
  };

  const updateAboutUs = async () => {
    await axios.patch(
      "https://veenocks-cms.onrender.com/api/home/about/66d89f1c4f56098ee255934b",
      {
        title: aboutUsTitle,
        content: aboutUsContent,
      }
    );

    getCoreValues();
  };

  const [coreValues, setCoreValues] = useState({
    description: "",
    title: "",
  });

  const [coreValuesContent, setCoreValuesContent] = useState("");

  const onCoreValuesChange = (e) => {
    setCoreValues({ ...coreValues, [e.target.name]: e.target.value });
  };

  const onCoreValuesContentChange = (content) => {
    setCoreValuesContent(content);
  };

  const getCoreValues = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/home/core-values/66d89ff14f56098ee255937a"
    );
    setCoreValues({
      description: data.homeCoreValues.description,
      title: data.homeCoreValues.title,
    });
    setCoreValuesContent(data.homeCoreValues.content);
  };

  const updateCoreValues = async () => {
    await axios.patch(
      "https://veenocks-cms.onrender.com/api/home/core-values/66d89ff14f56098ee255937a",
      {
        title: coreValues.title,
        content: coreValuesContent,
        description: coreValues.description,
      }
    );

    getCoreValues();
  };

  // our products
  const [ourProductsTitle, setOurProductsTitle] = useState("");
  const [ourProductsContent, setOurProductsContent] = useState("");
  const onOurProductsTitleChange = (e) => {
    setOurProductsTitle(e.target.value);
  };

  const onOurProductsContentChange = (content) => {
    setOurProductsContent(content);
  };

  const getOurProducts = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/home/our-products/66d8b69017659d6a8ea7b98c"
    );
    setOurProductsTitle(data.homeOurProducts.title);
    setOurProductsContent(data.homeOurProducts.content);
  };

  const updateOurProducts = async () => {
    await axios.patch(
      "https://veenocks-cms.onrender.com/api/home/our-products/66d8b69017659d6a8ea7b98c",
      {
        title: ourProductsTitle,
        content: ourProductsContent,
      }
    );

    getOurProducts();
  };

  // commitment
  const [commitmentTitle, setCommitmentTitle] = useState("");
  const [commitmentContent, setCommitmentContent] = useState("");
  const onCommitmentTitleChange = (e) => {
    setCommitmentTitle(e.target.value);
  };

  const onCommitmentContentChange = (content) => {
    setCommitmentContent(content);
  };

  const getCommitment = async () => {
    const { data } = await axios.get(
      "https://veenocks-cms.onrender.com/api/home/commitment/66d8b75017659d6a8ea7b9b1"
    );
    setCommitmentTitle(data.homeCommitment.title);
    setCommitmentContent(data.homeCommitment.content);
  };

  const updateCommitment = async () => {
    await axios.patch(
      "https://veenocks-cms.onrender.com/api/home/commitment/66d8b75017659d6a8ea7b9b1",
      {
        title: commitmentTitle,
        content: commitmentContent,
      }
    );
  };

  // footer
  const [footer, setFooter] = useState({
    about: "",
    telephone: "",
    email: "",
  });

  const [footerFactory, setFooterFactory] = useState("");

  const [footerShowroom, setFooterShowroom] = useState("");

  const onFooterChange = (e) => {
    setFooter({ ...footer, [e.target.name]: e.target.value });
  };

  const onFooterFactoryChange = (content) => {
    setFooterFactory(content);
  };

  const onFooterShowroomChange = (content) => {
    setFooterShowroom(content);
  };

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

  const updateFooter = async () => {
    await axios.patch(
      "https://veenocks-cms.onrender.com/api/home/footer/66d8b86c17659d6a8ea7b9d3",
      {
        about: footer.about,
        telephone: footer.telephone,
        email: footer.email,
        factory: footerFactory,
        showRoom: footerShowroom,
      }
    );

    getFooter();
  };

  useEffect(() => {
    getAboutUs();
    getCoreValues();
    getOurProducts();
    getCommitment();
    getFooter();
  }, []);

  return (
    <main className="w-full p-[40px]">
      <span className="text-[14px] block text-[#121212] mb-[40px]">
        Dashboard &gt; Home
      </span>

      <div className="grid grid-cols-1 gap-[40px]">
        {/* about us */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <span>About us</span>

            <textarea
              name="title"
              className="max-w-[400px] shadow border p-[10px]"
              value={aboutUsTitle}
              onChange={onAboutUsTitleChange}
            ></textarea>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={aboutUsContent}
                onChange={onAboutUsContentChange}
              />
            </div>

            <button
              className="border p-[10px] bg-[#121212] text-white w-[200px]"
              onClick={updateAboutUs}
            >
              Update About Us
            </button>
          </div>
        </div>

        {/* core values */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <span>Core Values</span>

            <textarea
              name="title"
              className="max-w-[400px] shadow border p-[10px]"
              value={coreValues.title}
              onChange={onCoreValuesChange}
            ></textarea>

            <textarea
              name="description"
              className="max-w-[400px] shadow border p-[10px]"
              value={coreValues.description}
              onChange={onCoreValuesChange}
            ></textarea>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={coreValuesContent}
                onChange={onCoreValuesContentChange}
              />
            </div>

            <button
              className="border p-[10px] bg-[#121212] text-white w-[200px]"
              onClick={updateCoreValues}
            >
              Update Core Values
            </button>
          </div>
        </div>

        {/* our products */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <span>Our Products</span>

            <textarea
              name="title"
              className="max-w-[400px] shadow border p-[10px]"
              value={ourProductsTitle}
              onChange={onOurProductsTitleChange}
            ></textarea>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={ourProductsContent}
                onChange={onOurProductsContentChange}
              />
            </div>

            <button
              className="border p-[10px] bg-[#121212] text-white w-[200px]"
              onClick={updateOurProducts}
            >
              Update our products
            </button>
          </div>
        </div>

        {/* commitment */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <span>Commitment</span>

            <textarea
              name="title"
              className="max-w-[400px] shadow border p-[10px]"
              value={commitmentTitle}
              onChange={onCommitmentTitleChange}
            ></textarea>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={commitmentContent}
                onChange={onCommitmentContentChange}
              />
            </div>

            <button
              className="border p-[10px] bg-[#121212] text-white w-[200px]"
              onClick={updateCommitment}
            >
              Update commitment
            </button>
          </div>
        </div>

        {/* footer */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <span>Footer</span>

            <textarea
              name="about"
              className="max-w-[500px] shadow border p-[10px] h-[150px]"
              value={footer.about}
              onChange={onFooterChange}
            ></textarea>

            <textarea
              name="telephone"
              className="max-w-[400px] shadow border p-[10px]"
              value={footer.telephone}
              onChange={onFooterChange}
            ></textarea>

            <textarea
              name="email"
              className="max-w-[400px] shadow border p-[10px]"
              value={footer.email}
              onChange={onFooterChange}
            ></textarea>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={footerFactory}
                onChange={onFooterFactoryChange}
              />
            </div>

            <div>
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                theme="snow"
                value={footerShowroom}
                onChange={onFooterShowroomChange}
              />
            </div>

            <button
              className="border p-[10px] bg-[#121212] text-white w-[200px]"
              onClick={updateFooter}
            >
              Update footer
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
