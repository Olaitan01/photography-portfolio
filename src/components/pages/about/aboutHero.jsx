import { useRef } from "react";
import HeroImg from "/src/assets/about/Image (17).png";
import mobileHeroImg from "/src/assets/about/Image (18).png";
import heroStar from "/src/assets/Abstract Design (3).png";
import HeroAnimation from "../../../styles/animations";

function AboutHero() {
  const container = useRef()
  
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobile(window.innerWidth < 640);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

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
      <div className=" w-[90%] flex justify-center m-auto  items-center" ref={container} >
        <div className="sm:relative " >
          <div className="py-8 fade">
            
              <img
                src={HeroImg}
                alt="Damien standing upright with his arms folded"
                className="w-full object-cover max-w-full sm:block hidden"
              />
            
              <img
                src={mobileHeroImg}
                alt="Damien standing upright with his arms folded"
                className="w-full object-cover max-w-full sm:hidden block"
              />
          
          </div>

          <div className="fade2 hidden  sm:flex sm:justify-between sm:items-center sm:absolute   sm:w-full sm:bottom-12  ">
            <div>
              <img
                src={heroStar}
                alt="A star in a circle"
                className="w-20 sm:w-10 tablet:w-14 lg:w-[80%] max-w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[0.8rem]  tablet:text-[0.8rem] tablet:translate-x-[6.5em] surfaceduo:translate-x-[5em] laptop:translate-x-[4em] lg:text-[0.8rem] text-textGrey surfaceduo:w-[60%] tablet:w-[60%]  ">
                SCROLL DOWN TO SEE THE WORK
              </p>
            </div>
          </div>

          <div className=" sm:absolute  ipad:translate-y-[0.25em]  ipad:top-[1.2em] minilaptop:top-12   laptop:top-[5em] w-full ">
            <p className="text-[1rem] font-normal text-grey lg:pl-2 fade2">ABOUT</p>
            <p className="text-[1.8rem] sm:text-1xl md:text-2xl font-semibold text-headerGrey fade2">
              ABOUT DAMIEN BRAUN
            </p>
            <div className="fade2 flex justify-between   sm:w-full  flex-wrap sm:flex-nowrap m-auto  items-stretch sm:border-0 border-lightDark border-b-2  py-6 sm:py-4 pb-10 sm:gap-2    ">
              {workStats.map((workStat, index) => (
                <div key={index} className="m-auto sm:m-0">
                  <div className="ipad:w-[14vw]  border-solid border-2 border-lightDark bg-serviceBg text-center lg:text-left p-4 my-2 w-40 sm:w-[100%] minilaptop:w-full laptop:text-center minilaptop:p-4  laptop:6 ipad:p-4 sm:p-2 lg:p-4 rounded-lg">
                    <p className="text-[1.5rem] sm:text-[1rem]  text-headerGrey font-semibold">
                      {workStat.statNo}
                    </p>
                    <p className="text-[0.7rem] sm:text-[0.4rem] lg:text-[0.8rem] minilaptop:text-[.8em] font-semibold  text-textGrey">
                      {workStat.statTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <HeroAnimation prop={container}  />
      </div>
    </>
  );
}

export default AboutHero;
