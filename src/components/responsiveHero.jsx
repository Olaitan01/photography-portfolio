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
                className={`${prop.starProp} w-20 sm:w-10 lg:w-[80%] max-w-full object-cover`}
              />
            </div>
            <div>
              <p className="text-[0.8rem] sm:text-[0.6rem] lg:text-[0.8rem] text-textGrey lg:w-40 sm:w-20">
                SCROLL DOWN TO SEE THE WORK
              </p>
            </div>
          </div>

          <div
            className={`${prop.socialClass}  sm:absolute sm:top-[7.5em] sm:right-0 p-2 hidden gap-2 items-center border-roundedGrey border-2 w-[40%] lg:w-[12%] justify-center rounded-full m-auto lg:m-0 -translate-y-12`}
          >
            <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <path
                    d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8 8 0 0 0 16 8"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <path
                    d="M5.033 14.5c6.037 0 9.34-5.002 9.34-9.339q0-.212-.01-.425A6.7 6.7 0 0 0 16 3.036a6.5 6.5 0 0 1-1.884.516 3.3 3.3 0 0 0 1.443-1.815 6.6 6.6 0 0 1-2.083.797A3.287 3.287 0 0 0 7.88 5.527 9.32 9.32 0 0 1 1.115 2.1a3.286 3.286 0 0 0 1.016 4.38 3.3 3.3 0 0 1-1.487-.41v.041A3.28 3.28 0 0 0 3.278 9.33c-.483.132-.99.151-1.481.056a3.29 3.29 0 0 0 3.065 2.282A6.58 6.58 0 0 1 0 13.026 9.3 9.3 0 0 0 5.033 14.5"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <path
                    d="M14.816 0H1.18C.528 0 0 .516 0 1.153v13.69A1.17 1.17 0 0 0 1.181 16h13.635c.653 0 1.184-.519 1.184-1.153V1.153C16 .516 15.469 0 14.816 0M4.746 13.634H2.373V5.997h2.375zM3.56 4.956a1.376 1.376 0 1 1-.004-2.751 1.376 1.376 0 0 1 .004 2.751m10.075 8.678h-2.372V9.922c0-.885-.015-2.025-1.234-2.025-1.234 0-1.422.966-1.422 1.962v3.775H6.238V5.997h2.274V7.04h.032c.315-.6 1.09-1.235 2.243-1.235 2.404 0 2.847 1.582 2.847 3.638z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>

          <div
            className={`${prop.serviceclass} sm:absolute sm:top-[8.25em] lg:top-14`}
          >
            <p className="text-[1rem] font-normal text-grey lg:font-extrabold">
              {prop.header}
            </p>
            <p className="text-[1.8rem] lg:text-5xl sm:text-xl font-semibold text-headerGrey lg:leading-[1.5em] ">
              {prop.title}
            </p>
            <div className="flex justify-between flex-wrap m-auto  items-stretch  border-lightDark border-b-2 sm:border-0 py-6 sm:py-4 pb-10 sm:gap-2 lg:gap-4">
              <div>
                <div
                  className={`${prop.serviceparagraph} text-center lg:text-left  lg:w-[70%]`}
                >
                  <p className="text-[0.8rem] sm:text-[0.4rem] lg:text-[1rem] font-normal text-textGrey text-left">
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
  serviceclass: PropTypes.string.isRequired,
  serviceparagraph: PropTypes.string.isRequired,
};

export default ResponsiveHeroImg;
