import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function MobileMenu({
  isMobileMenuOpen,
  closeMobileMenu,
  menu,
  goToPage,
  chooseStep,
  submenu,
  handleGoBack,
}) {
  return (
    <div
      className={`w-full h-[100vh] fixed top-0 left-0 transition ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
      } z-[40]`}
    >
      <div className="w-full h-full relative p-[20px]">
        {!submenu ? (
          <div className="flex flex-col gap-[20px] bg-white shadow mt-[52px] p-[40px_20px_20px_20px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[20px] h-[20px] absolute top-[15px] right-[15px]"
              onClick={closeMobileMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            {menu.map((_menu, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-[10px] capitalize text-[16px]"
                >
                  {_menu.subMenu ? (
                    <span onClick={() => chooseStep(_menu.subMenu)}>
                      {_menu.name}
                    </span>
                  ) : (
                    <a href={_menu.to}>{_menu.name}</a>
                  )}
                  {_menu.subMenu ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                      onClick={() => chooseStep(_menu.subMenu)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-[20px] bg-white p-[40px_20px_20px_20px] mt-[52px] shadow relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[20px] h-[20px] absolute right-[15px] top-[20px]"
              onClick={handleGoBack}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            {submenu.map((_submenu, j) => {
              return (
                <a
                  href={_submenu.to}
                  className="text-[16px]"
                  key={j}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  {_submenu.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  closeMobileMenu: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
  goToPage: PropTypes.func.isRequired,
  chooseStep: PropTypes.func.isRequired,
  submenu: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleGoBack: PropTypes.func,
};
