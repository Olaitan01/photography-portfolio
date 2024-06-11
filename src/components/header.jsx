import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/Logo.png";
import openIcon from "/src/assets/openMenu.png";
import HeaderAnimation from "../styles/headerAnimation";

function Header() {
  // Mobile detection state
  const [isMobile, setIsMobile] = useState(false);

  // Add resize event listener on component mount and remove on unmount
  useEffect(() => {
    // Function to determine screen size on render and resize
    function isResponsive() {
      setIsMobile(window.innerWidth < 1024);
    }

    window.addEventListener("resize", isResponsive);

    return () => window.removeEventListener("resize", isResponsive);
  }, []);

  // desktop active nav/page styling
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "rgb(228,228,230)" : "",
      backgroundColor: isActive ? "rgb(28,28,33)" : "",
    };
  };

  //mobile link styling
  const mobileActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "rgb(89,61,239)" : "",
    };
  };

  // active link styles based on screen size
  const activeStyle = !isMobile ? activeLink : mobileActiveLink;

  //mobile drop down
  const navRef = useRef();

  //drop down function for the button
  const openMenu = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const container = useRef();

  return (
    <div >
      <div
        ref={container}
        className=" headerTop text-headerGrey   border-0 border-b-2 border-lightDark outline-none "
      >
        <div className="flex justify-between items-center border-l-2 border-r-2 border-lightDark border-0 mx-6 lg:mx-20 pl-8 pt-14 lg:pt-4 ">
          <div className="pb-2 cursor-pointer">
            <img src={logo} alt="Damien logo" className="w-[100%] object-fit" />
          </div>

          <div className="header-nav" ref={navRef}>
            <ul className=" relative flex-col text-4xl pt-[5em] pl-[1em] gap-[1em] text-[#000000]  flex lg:pt-0 lg:pl-0 lg:gap-0  lg:flex-row lg:items-center   lg:text-sm lg:text-[rgb(228,228,230)] lg:font-semibold ">
              <li>
                <NavLink
                  to="/"
                  className="lg:border-r-2 border-lightDark lg:p-8  cursor-pointer lg:hover:bg-lightDark hover:text-headerGrey "
                  style={activeStyle}
                  onClick={openMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="lg:border-r-2 border-lightDark lg:px-6 lg:py-8 cursor-pointer  lg:hover:bg-lightDark hover:text-headerGrey "
                  style={activeStyle}
                  onClick={openMenu}
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="lg:border-r-2 border-lightDark lg:px-6 lg:py-8 cursor-pointer  lg:hover:bg-lightDark hover:text-headerGrey "
                  style={activeStyle}
                  onClick={openMenu}
                >
                  Portfolio
                </NavLink>
              </li>

              <NavLink
                to="/services"
                className="lg:px-6 lg:py-8 cursor-pointer  lg:hover:bg-lightDark hover:text-headerGrey "
                style={activeStyle}
                onClick={openMenu}
              >
                Services
              </NavLink>

              <li>
                <NavLink
                  to="/contact"
                  className="lg:hidden "
                  style={activeStyle}
                  onClick={openMenu}
                >
                  Contact Me
                </NavLink>
              </li>

              <button
                className="lg:hidden absolute top-[1.5em] right-[1.5em] "
                onClick={openMenu}
              >
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </ul>
          </div>
          <div className=" lg:z-0 border-l-2 border-t-2  border-lightDark p-4 rounded-tl-[1rem] lg:border-0">
            <button>
              <NavLink
                to="/contact"
                className="hidden lg:block lg:border-2-solid lg:bg-lightDark p-4 rounded-lg"
                style={activeLink}
              >
                Contact Me
              </NavLink>
            </button>
            <button className="lg:hidden  " onClick={openMenu}>
              <img src={openIcon} alt="open and close icons" />
            </button>
          </div>
        </div>
      </div>
      <HeaderAnimation prop={container} />
      <Outlet />
    </div>
  );
}

export default Header;
