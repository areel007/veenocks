// import { a } from "react-router-dom";
import PropTypes from "prop-types";
import style from "../assets/css.modules/AppHeader.module.css";
import Logo from "../assets/images/veenocks-logo.png";
import { Link } from "react-router-dom";

export default function AppHeader({ menu, openMobileMenu, isMobileMenuOut }) {
  return (
    <>
    <header className="w-full h-[70px] transition bg-white fixed left-0 top-0 z-[200] shadow">
      <div className="w-[90%] xl:w-[1100px] mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          {/* <span className="text-[20px] text-black font-[600]">Veenocks</span> */}

          <Link to={"/"} className="w-[150px] md:w-[200px]">
            <img src={Logo} alt="veenocks" />
          </Link>

          <nav className="h-full md:flex items-center gap-[20px] hidden">
            {menu.map((_menu, i) => {
              return (
                <div
                  className={`h-full flex items-center border-b-[4px] border-transparent hover:border-[#a5a3a3] uppercase text-[12px] font-[500] tracking-[2px] relative ${style.menu}`}
                  key={i}
                >
                  <a href={_menu.to} className="flex">
                    <span>{_menu.name}</span>
                    {_menu.subMenu ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    ) : null}
                  </a>
                  {_menu.subMenu ? (
                    <div className={style.submenu__dropdown}>
                      {_menu.subMenu.map((_subMenu, j) => {
                        return (
                          <a
                            key={j}
                            href={_subMenu.to}
                            className="whitespace-nowrap capitalize font-[400] hover:font-[500]"
                            target={
                              _subMenu.name === "Posmoreti" ? "_blank" : ""
                            }
                            rel={
                              _subMenu.name === "Posmoreti"
                                ? "noopener noreferrer"
                                : ""
                            }
                          >
                            {_subMenu.name}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          {isMobileMenuOut ? null : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 block md:hidden"
              onClick={openMobileMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
    </header>
    <div className="h-[70px]"></div>
    </>
  );
}

AppHeader.propTypes = {
  menu: PropTypes.array.isRequired,
  openMobileMenu: PropTypes.func.isRequired,
  isMobileMenuOut: PropTypes.bool,
};
