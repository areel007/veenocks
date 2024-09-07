import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

export const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [role, setRole] = useState();
  const [userId, setUserId] = useState(window.localStorage.getItem("user"));

  const getUser = async () => {
    const response = await axios.get(
      `https://veenocks-cms.onrender.com/api/users/${userId}`
    );

    setRole(response.data.user);

    console.log(response.data.user);
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  return (
    <main className="w-full h-screen grid grid-cols-[100px_1fr]">
      <div></div>
      <div className="w-[100px] fixed bg-[#121212] h-full py-[40px] flex flex-col justify-between">
        <div className="flex flex-col gap-[20px]">
          <Link
            to="/cms/dashboard/home"
            className="flex flex-col items-center gap-[5px] cursor-pointer group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[30px] h-[30px] text-white group-hover:text-zinc-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span className="text-white text-[14px] group-hover:text-zinc-500">
              Home
            </span>
          </Link>

          <Link
            to="/cms/dashboard/about-us"
            className="flex flex-col items-center gap-[5px] cursor-pointer group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-[30px] h-[30px] fill-white group-hover:fill-zinc-500"
            >
              <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
            </svg>

            <span className="text-white text-[14px] group-hover:text-zinc-500">
              About Us
            </span>
          </Link>

          <Link
            to="/cms/dashboard/factory"
            className="flex flex-col items-center gap-[5px] cursor-pointer group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-[30px] h-[30px] fill-white group-hover:fill-zinc-500"
            >
              <path d="M64 32C46.3 32 32 46.3 32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-151.8c0-18.2-19.4-29.7-35.4-21.1L352 215.4l0-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4 160 64c0-17.7-14.3-32-32-32L64 32z" />
            </svg>

            <span className="text-white text-[14px] group-hover:text-zinc-500">
              Factory
            </span>
          </Link>

          <Link
            to="/cms/dashboard/media"
            className="flex flex-col items-center gap-[5px] cursor-pointer group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[30px] h-[30px] fill-white group-hover:fill-zinc-500"
            >
              <path d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z" />
            </svg>

            <span className="text-white text-[14px] group-hover:text-zinc-500">
              Media
            </span>
          </Link>

          {role?.role === "super_admin" && (
            <Link
              to="/cms/dashboard/users"
              className="flex flex-col items-center gap-[5px] cursor-pointer group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[30px] h-[30px] text-white group-hover:text-zinc-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <span className="text-white text-[14px] group-hover:text-zinc-500">
                Users
              </span>
            </Link>
          )}
        </div>

        <div
          className="flex flex-col items-center gap-[5px] cursor-pointer group"
          onClick={() => logout()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[30px] h-[30px] text-white group-hover:text-zinc-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>

          <span className="text-white text-[14px] group-hover:text-zinc-500">
            Logout
          </span>
        </div>
      </div>

      <Outlet />
    </main>
  );
};
