import { useEffect, useState } from "react";
import HeroImg from "/src/assets/about/Image (17).png";
import mobileHeroImg from "/src/assets/about/Image (18).png";

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
      <div className=" w-[90%] flex justify-center m-auto items-center">
        <div>
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

          <div>
            <p className="text-[1rem] font-normal text-grey ">ABOUT</p>
            <p className="text-[1.8rem] font-semibold text-headerGrey ">ABOUT DAMIEN BRAUN</p>
            <div className="flex justify-between flex-wrap m-auto items-stretch  border-lightDark border-b-2 py-6 pb-10">
              {workStats.map((workStat, index) => (
                <div key={index} >
                  <div className="border-solid border-2 border-lightDark bg-serviceBg text-center p-4 my-2 w-40  rounded-lg">
                    <p className="text-[1.5rem] text-headerGrey font-semibold">
                      {workStat.statNo}
                    </p>
                    <p className="text-[0.7rem] font-semibold  text-textGrey">
                      {workStat.statTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
