import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import heroImg1 from "./assets/images/car1.jpg";
import heroImg2 from "./assets/images/car2.jpg";
import heroImg3 from "./assets/images/car3.jpg";
import heroImg4 from "./assets/images/car4.jpg";
import AppHeader from "./components/AppHeader";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import AppFooter from "./components/AppFooter";
import AboutUs from "./pages/about-us";
import Factory from "./pages/factory";
import FactoryGridImg1 from "./assets/images/factory_grid1.jpg";
import FactoryGridImg2 from "./assets/images/factory_grid2.jpg";
import FactoryGridImg3 from "./assets/images/factory_grid3.jpg";
import FactoryGridImg4 from "./assets/images/factory_grid4.jpg";
import FactoryGridImg5 from "./assets/images/factory_grid5.jpg";
import FactoryGridImg6 from "./assets/images/factory_grid6.jpg";
import Contacts from "./pages/Contacts";

function App() {
  const [submenu, setSubmenu] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    focusOnSelect: true,
    pauseOnHover: true,
    arrows: false,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const heroImages = [
    {
      img: heroImg1,
      path: "/",
      name: "",
    },
    {
      img: heroImg2,
      path: "/",
      name: "",
    },
    {
      img: heroImg3,
      path: "/",
      name: "",
    },
    {
      img: heroImg4,
      path: "/",
      name: "",
    },
  ];

  const menu = [
    {
      name: "home",
      to: "/",
      step: 1,
    },
    {
      name: "about",
      to: "/about",
      step: 2,
    },
    {
      name: "factory",
      to: "/factory",
      step: 3,
    },
    {
      name: "products",
      to: "",
      subMenu: [
        {
          name: "Posmoreti",
          to: "https://posmoreti.com/tiles",
        },
      ],
    },
    {
      name: "contacts",
      to: "/contacts",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productCardDetails = [
    {
      img: "https://res.cloudinary.com/dmyoyc4bb/image/upload/c_scale,w_448,h_318,dpr_1.5/f_auto,q_auto/v1690379481/posmoreti/9-BOSTON-KITCHEN-P.jpg?_i=AA",
      name: "eko",
      to: "https://posmoreti.com/boston/",
    },
    {
      img: "https://res.cloudinary.com/dmyoyc4bb/image/upload/c_scale,w_448,h_318,dpr_1.5/f_auto,q_auto/v1690379477/posmoreti/3-SINAGE-BATHROOM-P.jpg?_i=AA",
      name: "sinage",
      to: "https://posmoreti.com/boston/sinage",
    },
    {
      img: "https://res.cloudinary.com/dmyoyc4bb/image/upload/c_scale,w_448,h_318,dpr_1.5/f_auto,q_auto/v1690379473/posmoreti/7-IBU-Lobby-P.jpg?_i=AA",
      name: "ibu",
      to: "https://posmoreti.com/ibu",
    },
    {
      img: "https://res.cloudinary.com/dmyoyc4bb/image/upload/c_scale,w_448,h_318,dpr_1.5/f_auto,q_auto/v1690379469/posmoreti/11-IBU-OFFICE-P.jpg?_i=AA",
      name: "river",
      to: "https://posmoreti.com/river",
      
    },
    {
      img: "https://res.cloudinary.com/dmyoyc4bb/image/upload/c_scale,w_448,h_318,dpr_1.5/f_auto,q_auto/v1690379465/posmoreti/13-Evory-Living-P.jpg?_i=AA",
      name: "ebony",
      to: "https://posmoreti.com/ebony",
    },
    {
      img: "https://res.cloudinary.com/dmyoyc4bb/image/upload/c_scale,w_448,h_318,dpr_1.5/f_auto,q_auto/v1690379461/posmoreti/17-Smoke-Grey-P.jpg?_i=AA",
      name: "smoke",
      to: "https://posmoreti.com/smoke-2/",
    },
    {
      img: "https://res.cloudinary.com/dmyoyc4bb/image/upload/c_scale,w_448,h_318,dpr_1.5/f_auto,q_auto/v1690379447/posmoreti/12-Ferdey-Kirchen-P.jpg?_i=AA",
      name: "peeble",
      to: "https://posmoreti.com/peeble/",
    },
    {
      img: "https://res.cloudinary.com/dmyoyc4bb/image/upload/c_scale,w_448,h_318,dpr_1.5/f_auto,q_auto/v1690379456/posmoreti/2-CARRARA-KITCHEN-P.jpg?_i=AA",
      name: "carrara",
      to: "https://posmoreti.com/carrara",
    },
  ];

  const gridImages = [
    FactoryGridImg1,
    FactoryGridImg2,
    FactoryGridImg3,
    FactoryGridImg4,
    FactoryGridImg5,
    FactoryGridImg6,
  ];

  // Methods
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setSubmenu(null);
  };

  const goToPage = (_menu) => {
    window.location.href = _menu;
  };

  const chooseStep = (_submenu) => {
    setSubmenu(_submenu);
  };

  const handleGoBack = () => {
    setSubmenu(null);
  };

  return (
    <Router>
      <AppHeader
        menu={menu}
        openMobileMenu={openMobileMenu}
        isMobileMenuOut={isMobileMenuOpen}
      />
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
        menu={menu}
        goToPage={goToPage}
        chooseStep={chooseStep}
        submenu={submenu}
        handleGoBack={handleGoBack}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              settings={settings}
              heroImages={heroImages}
              cardDetails={productCardDetails}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/factory" element={<Factory gridImages={gridImages} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
