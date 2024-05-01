import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/Logo.png";
import openIcon from "/src/assets/openMenu.png";

function Header() {
  //active nav/page styling
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "rgb(228,228,230)" : "",
      backgroundColor: isActive ? "rgb(28,28,33)" : "",
    };
  };

  const mobileActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "rgb(89,61,239)" : "",
    };
  };

  
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function isResponsive() {
      setIsMobile(window.innerWidth < 1114);
    }

    window.addEventListener("resize", isResponsive);

    return () => window.removeEventListener("resize", isResponsive);
  }, []);

  const activeStyle = !isMobile ? activeLink : mobileActiveLink;

  //Mobile drop down
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <div className="headerTop text-headerGrey   border-0 border-b-2 border-lightDark outline-none ">
        <div className="flex justify-between items-center border-l-2 border-r-2 border-lightDark border-0 mx-6 lg:mx-20 pl-8 pt-14 lg:pt-4 ">
          <div className="pb-2 cursor-pointer">
            <img src={logo} alt="Damien logo" className="w-[100%] object-fit" />
          </div>
          <div className="absolute flex lg:flex-initial items-center z-10 bg-[red] lg:bg-initial lg:static top-0 left-0 w-full lg:w-initial  h-full  m-auto  lg:block lg:border-t-2 lg:border-x-2  lg:border-lightDark lg:rounded-t-md">
            <ul className="flex flex-col pl-8 gap-y-8 lg:pl-0 lg:gap-0  text-4xl lg:flex-row lg:items-center   lg:text-sm lg:text-grey lg:font-semibold">
              <li>
                <NavLink
                  to="/"
                  className="lg:border-r-2 border-lightDark lg:p-8  lcursor-pointer lg:hover:bg-lightDark hover:text-headerGrey "
                  style={activeStyle}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="lg:border-r-2 border-lightDark lg:px-6 lg:py-8 cursor-pointer  lg:hover:bg-lightDark hover:text-headerGrey "
                  style={activeStyle}
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="lg:border-r-2 border-lightDark lg:px-6 lg:py-8 cursor-pointer  lg:hover:bg-lightDark hover:text-headerGrey "
                  style={activeStyle}
                >
                  Portfolio
                </NavLink>
              </li>

              <NavLink
                to="/services"
                className="lg:px-6 lg:py-8 cursor-pointer  lg:hover:bg-lightDark hover:text-headerGrey "
                style={activeStyle}
              >
                Services
              </NavLink>

              <li>
                <NavLink
                  to="/contact"
                  className="lg:hidden "
                  style={activeStyle}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="z-10 lg:z-0 border-l-2 border-t-2  border-lightDark p-4 rounded-tl-[1rem] lg:border-0">
            <button>
              <NavLink
                to="/contact"
                className="hidden lg:block lg:border-2-solid lg:bg-lightDark p-4 rounded-lg"
                style={activeLink}
              >
                Contact Me
              </NavLink>
            </button>
            <button className=" lg:hidden " onClick={() => openMenu()}>
              <img src={openIcon} alt="open and close icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
