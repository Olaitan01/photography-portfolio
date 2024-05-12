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

  // Mobile detection state
  const [isMobile, setIsMobile] = useState(false);

  // Add resize event listener on component mount and remove on unmount
  useEffect(() => {
    // Function to determine screen size on render and resize
    function isResponsive() {
      setIsMobile(window.innerWidth < 1014);
    }

    window.addEventListener("resize", isResponsive);

    return () => window.removeEventListener("resize", isResponsive);
  }, []);

  // Combine active link styles based on mobile state
  const activeStyle = !isMobile ? activeLink : mobileActiveLink;

  //Mobile drop down
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = () => setIsOpen(!isOpen);

  //styles for mobile navigation
  const dropDownMenuStyles = {
    clipPath: isOpen ? "circle( 75%)" : "circle(0% at 90% 10%)",
    background: "rgb(228,228,230)",
    transition: "clip-path 1s ease-in-out",
    position: "absolute",
    width: "100%",
    height: "100vh",
    bottom: 0,
    left: 0,
    zIndex: 10,
    overflow: "hidden",
    
  };

  //styles for desktop navigation
  const desktopNavStyles = {
    width: "initial",
    margin: "auto",
    borderTop: "2px solid rgb(28,28,33)",
    borderLeft: "2px solid rgb(28,28,33)",
    borderRight: "2px solid rgb(28,28,33)",
    borderRadius: "1em 1em 0 0",
  };

  return (
    <div className="">
      <div className="headerTop text-headerGrey   border-0 border-b-2 border-lightDark outline-none ">
        <div className="flex justify-between items-center border-l-2 border-r-2 border-lightDark border-0 mx-6 lg:mx-20 pl-8 pt-14 lg:pt-4 ">
          <div className="pb-2 cursor-pointer">
            <img src={logo} alt="Damien logo" className="w-[100%] object-fit" />
          </div>

          <div style={!isMobile ? desktopNavStyles : dropDownMenuStyles} >
            <ul className="flex-col text-4xl pt-[5em] pl-[1em] gap-[1em] text-[#000000] text- flex lg:pt-0 lg:pl-0 lg:gap-0  lg:flex-row lg:items-center   lg:text-sm lg:text-grey lg:font-semibold ">
              <li>
                <NavLink
                  to="/"
                  className="lg:border-r-2 border-lightDark lg:p-8  lcursor-pointer lg:hover:bg-lightDark hover:text-headerGrey "
                  style={activeStyle}
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="lg:border-r-2 border-lightDark lg:px-6 lg:py-8 cursor-pointer  lg:hover:bg-lightDark hover:text-headerGrey "
                  style={activeStyle}
                  onClick={handleNavLinkClick}
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="lg:border-r-2 border-lightDark lg:px-6 lg:py-8 cursor-pointer  lg:hover:bg-lightDark hover:text-headerGrey "
                  style={activeStyle}
                  onClick={handleNavLinkClick}
                >
                  Portfolio
                </NavLink>
              </li>

              <NavLink
                to="/services"
                className="lg:px-6 lg:py-8 cursor-pointer  lg:hover:bg-lightDark hover:text-headerGrey "
                style={activeStyle}
                onClick={handleNavLinkClick}
              >
                Services
              </NavLink>

              <li>
                <NavLink
                  to="/contact"
                  className="lg:hidden "
                  style={activeStyle}
                  onClick={handleNavLinkClick}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={isOpen ?`border-0 z-10` : ` lg:z-0 border-l-2 border-t-2  border-lightDark p-4 rounded-tl-[1rem] lg:border-0` }>
            <button>
              <NavLink
                to="/contact"
                className="hidden lg:block lg:border-2-solid lg:bg-lightDark p-4 rounded-lg"
                style={activeLink}
              >
                Contact Me
              </NavLink>
            </button>
            <button className=" lg:hidden  " onClick={openMenu}>
              {isOpen ? (
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
              ) : (
                <img src={openIcon} alt="open and close icons" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
