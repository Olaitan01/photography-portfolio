import { useEffect, useState } from "react";
import HeroImg from "/src/assets/about/Image (17).png";
import mobileHeroImg from "/src/assets/about/Image (18).png";
import heroStar from "/src/assets/Abstract Design (3).png";


function AboutHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //work rate stats

  const workStats = [
    {
      statNo: "15+",
      statTitle: "Years  in Business",
    },
    {
      statNo: "500+",
      statTitle: "Happy Clients",
    },
    {
      statNo: "10+",
      statTitle: "Photography Awards",
    },
    {
      statNo: "05+",
      statTitle: "International Shoots",
    },
    {
      statNo: "10,000+",
      statTitle: "Social Media Followers",
    },
    {
      statNo: "90%",
      statTitle: "Client Retention Rate",
    },
  ];

  return (
    <>
      <div className=" w-[90%] flex justify-center m-auto  items-center">
        <div className="lg:relative">
          <div className="py-8">
            {!isMobile ? (
              <img
                src={HeroImg}
                alt="Damien standing upright with his arms folded"
                className="w-full object-cover max-w-full"
              />
            ) : (
              <img
                src={mobileHeroImg}
                alt="Damien standing upright with his arms folded"
                className="w-full object-cover max-w-full"
              />
            )}
          </div>

          <div className="hidden  sm:flex sm:justify-between sm:items-center sm:absolute lg:bottom-20 sm:bottom-[13rem]  sm:w-[90%] lg:w-full ">
            <div>
              <img
                src={heroStar}
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
            <p className="text-[1rem] font-normal text-grey lg:pl-2">ABOUT</p>
            <p className="text-[1.8rem] lg:text-5xl sm:text-xl font-semibold text-headerGrey ">
              ABOUT DAMIEN BRAUN
            </p>
            <div className="flex justify-between flex-wrap m-auto  items-stretch  border-lightDark border-b-2 sm:border-0 py-6 sm:py-4 pb-10 sm:gap-2 lg:gap-4">
              {workStats.map((workStat, index) => (
                <div key={index}>
                  <div className=" border-solid border-2 border-lightDark bg-serviceBg text-center lg:text-left p-4 my-2 w-40 sm:w-[90px] lg:w-[198px]  sm:p-2 lg:p-6 rounded-lg">
                    <p className="text-[1.5rem] sm:text-[1rem] lg:text-[1.2rem] text-headerGrey font-semibold">
                      {workStat.statNo}
                    </p>
                    <p className="text-[0.7rem] sm:text-[0.4rem] lg:text-[0.8rem] font-semibold  text-textGrey">
                      {workStat.statTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
