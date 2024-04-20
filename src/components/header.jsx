import { NavLink } from "react-router-dom";
import logo from "/src/assets/Logo.png";
import openIcon from "/src/assets/openMenu.png";
function Header() {
  return (
    <div>
      <div className="headerTop text-headerGrey   border-0 border-b-2 border-lightDark outline-none ">
        <div className="flex justify-between items-center border-l-2 border-r-2 border-lightDark border-0 mx-6 lg:mx-20 pl-8 pt-14 lg:pt-4 ">
          <div className="pb-2 cursor-pointer">
            <img src={logo} alt="Damien logo" className="w-[100%] object-fit" />
          </div>
          <div className="hidden  lg:block border-t-2 border-x-2  border-lightDark rounded-t-md">
            <ul className="flex items-center   lg:text-sm lg:text-grey lg:font-semibold">
              <li>
                <NavLink
                  to="/"
                  className="border-r-2 border-lightDark p-8  cursor-pointer hover:bg-lightDark hover:text-headerGrey "
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="border-r-2 border-lightDark px-6 py-8 cursor-pointer  hover:bg-lightDark hover:text-headerGrey "
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="border-r-2 border-lightDark px-6 py-8 cursor-pointer  hover:bg-lightDark hover:text-headerGrey "
                >
                  Portfolio
                </NavLink>
              </li>
              <NavLink
                to="/services"
                className="px-6 py-8 cursor-pointer  hover:bg-lightDark hover:text-headerGrey "
              >
                Services
              </NavLink>
            </ul>
          </div>
          <div className="border-l-2 border-t-2  border-lightDark p-4 rounded-tl-[1rem] lg:border-0">
            <button className="hidden lg:block lg:border-2-solid lg:bg-lightDark p-4 rounded-lg">
              Contact Me
            </button>
            <button className=" lg:hidden">
              <img src={openIcon} alt="open and close icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
