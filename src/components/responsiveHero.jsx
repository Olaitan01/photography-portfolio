import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ResponsiveHeroImg = (prop) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function isResponsive() {
      setIsMobile(window.innerWidth < 640);
    }

    window.addEventListener("resize", isResponsive);

    return () => window.removeEventListener("resize", isResponsive);
  }, []);

  return (
    <>
      <div className=" w-[90%] flex justify-center m-auto  items-center">
        <div className="lg:relative">
          <div className="py-8">
            {!isMobile ? (
              <img
                src={prop.desktopImg}
                alt="Damien standing upright with his arms folded"
                className="w-full object-cover max-w-full"
              />
            ) : (
              <img
                src={prop.mobileImg}
                alt="Damien standing upright with his arms folded"
                className="w-full object-cover max-w-full"
              />
            )}
          </div>

          <div className="hidden  sm:flex sm:justify-between sm:items-center sm:absolute lg:bottom-20 sm:bottom-[13rem]  sm:w-[90%] lg:w-full ">
            <div>
              <img
                src={prop.herostar}
                alt="A star in a circle"
                className="w-20 sm:w-10 lg:w-[80%] max-w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[0.8rem] sm:text-[0.6rem] lg:text-[0.8rem] text-textGrey lg:w-40 sm:w-20">
                SCROLL DOWN TO SEE THE WORK
              </p>
            </div>
          </div>

          <div className="sm:absolute sm:top-[8.25em] lg:top-14 ">
            <p className="text-[1rem] font-normal text-grey lg:font-extrabold">
              {prop.header}
            </p>
            <p className="text-[1.8rem] lg:text-5xl sm:text-xl font-semibold text-headerGrey lg:leading-[1.5em] ">
              {prop.title}
            </p>
            <div className="flex justify-between flex-wrap m-auto  items-stretch  border-lightDark border-b-2 sm:border-0 py-6 sm:py-4 pb-10 sm:gap-2 lg:gap-4">
              <div>
                <div className="  text-center lg:text-left  lg:w-[70%] ">
                  <p className="text-[0.7rem] sm:text-[0.4rem] lg:text-[1rem] font-normal text-textGrey">
                    {prop.paragraph}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ResponsiveHeroImg.prototype = {
  img: PropTypes.string.isRequired,
  mobileImg: PropTypes.string.isRequired,
  heroStar: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default ResponsiveHeroImg;
